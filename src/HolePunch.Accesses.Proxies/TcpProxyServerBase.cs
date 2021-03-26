using HolePunch.Proxies;

using System;
using System.Linq;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Concurrent;
using System.Collections.ObjectModel;

namespace HolePunch.Accesses.Proxies
{
    public abstract class TcpProxyServerBase : IProxyServer
    {
        private ConcurrentBag<IProxySession> _sessions;
        private int _listenPort;
        private ProxyServerStatus _status = ProxyServerStatus.Shutdown;
        private IPEndPoint _forwardEndPoint;
        private Task _listenLoop;
        private TcpListener _tcpListener;

        public TcpProxyServerBase(IPEndPoint forwardEndPoint, int listenPort = 0)
        {
            _sessions = new ConcurrentBag<IProxySession>();
            _forwardEndPoint = forwardEndPoint;
            _listenPort = listenPort;
        }

        public IReadOnlyCollection<IProxySession> Sessions => new ReadOnlyCollection<IProxySession>(_sessions.ToList());

        public ProxyServerStatus Status => _status;

        public int ListenPort => _listenPort;

        public IPEndPoint ForwardEndPoint => _forwardEndPoint;

        public Task Start()
        {
            // check current status
            if (_status != ProxyServerStatus.Shutdown)
            {
                throw new InvalidOperationException("Current status can't be start.");
            }

            TaskCompletionSource<bool> tcs = new TaskCompletionSource<bool>();

            StartListenLoop(tcs);

            return tcs.Task;
        }

        public Task Stop()
        {
            // check current status
            if (_status != ProxyServerStatus.Running)
            {
                throw new InvalidOperationException("Current status can't be stop.");
            }

            // update status
            _status = ProxyServerStatus.Closing;

            // wait listen loop stop
            _listenLoop.Wait();

            // stop listener
            _tcpListener.Stop();

            // clear listener
            _tcpListener = null;

            // disconnect all session then clear sessions collection
            return Task.WhenAll(_sessions.Select(x => x.Disconnect()).ToArray())
                .ContinueWith((task) =>
                {
                    _sessions.Clear();

                    // update status
                    _status = ProxyServerStatus.Shutdown;
                });
        }

        public abstract Task<bool> AuthorizeConnection(TcpClient tcpClient);

        private Task StartListenLoop(TaskCompletionSource<bool> tsc)
        {
            // update status
            _status = ProxyServerStatus.Booting;

            // create new listener
            _tcpListener = new TcpListener(new IPEndPoint(IPAddress.Any, _listenPort));

            // start listener. When initial listen port is 0, will use unused port
            _tcpListener.Start();

            // update current port
            _listenPort = ((IPEndPoint)_tcpListener.LocalEndpoint).Port;

            // set result for TSC, `await Start` will continue run
            tsc.SetResult(true);

            // update status
            _status = ProxyServerStatus.Running;

            return ListenLoop();
        }

        private async Task ListenLoop()
        {
            while (_status == ProxyServerStatus.Running)
            {
                try
                {
                    // wait remote client connecting
                    var tcpClient = await _tcpListener.AcceptTcpClientAsync();

                    // no buffer
                    tcpClient.NoDelay = true;

                    // fire and forget create session process in background. do not blocking the listen loop
                    _ = Task.Run(async () =>
                    {
                        // close unauthorize remote connection
                        if (!await AuthorizeConnection(tcpClient))
                        {
                            tcpClient.Close();
                            tcpClient.Dispose();
                        }

                        // create new session
                        var newSession = new TcpProxySession(_forwardEndPoint, tcpClient);
                        newSession.OnConnected += session =>
                        {
                            _sessions.Add(session);
                        };
                        newSession.OnDisconnected += session =>
                        {
                            _sessions.TryTake(out IProxySession _);
                        };

                        // start connect
                        await newSession.Connect();
                    });
                }
                catch
                {

                }
            }
        }
    }
}
