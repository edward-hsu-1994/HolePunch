using HolePunch.Proxies;

using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Accesses.Proxies
{
    public class TcpProxySession : IProxySession
    {
        private readonly TcpClient _client;

        private TcpClient _forwardClient;

        private IPEndPoint _forwardEndPoint;
        private ProxySessionStatus _status;

        public event Action<IProxySession> OnConnected;
        public event Action<IProxySession> OnDisconnected;


        public TcpProxySession(IPEndPoint forwardEndPoint, TcpClient client)
        {
            _forwardEndPoint = forwardEndPoint;
            _client = client;
        }


        public IPEndPoint ClientEndPoint => _client?.Client?.RemoteEndPoint as IPEndPoint;

        public IPEndPoint ForwardEndPoint => _forwardEndPoint;

        public ProxySessionStatus Status => _status;


        public async Task Connect()
        {
            _status = ProxySessionStatus.Booting;

            _forwardClient = new TcpClient();

            await _forwardClient.ConnectAsync(_forwardEndPoint.Address, _forwardEndPoint.Port);

            _ = Task.Run(async () =>
            {
                try
                {
                    var fromSourceStream = _client.GetStream();
                    var toTargetStream = _forwardClient.GetStream();

                    // 連線對接
                    await Task.WhenAny(
                        fromSourceStream.CopyToAsync(toTargetStream),
                        toTargetStream.CopyToAsync(fromSourceStream));
                }
                catch
                {
                    await Disconnect();
                }
            });

            OnConnected?.Invoke(this);
        }

        public async Task Disconnect()
        {
            _status = ProxySessionStatus.Closing;

            _client.Close();
            _client.Dispose();

            _forwardClient.Close();
            _forwardClient.Close();

            _status = ProxySessionStatus.Shutdown;

            OnDisconnected?.Invoke(this);
        }
    }
}
