using HolePunch.Proxies;

using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using System.Reactive.Linq;
using System.Reactive.Concurrency;

namespace HolePunch.Accesses
{
    public class TcpProxyServerHub : IProxyServerHub
    {
        private readonly ConcurrentDictionary<Guid, IProxyServer> _proxyServerDict;

        public TcpProxyServerHub()
        {
            _proxyServerDict = new ConcurrentDictionary<Guid, IProxyServer>();

            Observable.Interval(TimeSpan.FromSeconds(30))
                .ObserveOn(Scheduler.Default)
                .Subscribe(async (_) =>
                {
                    Console.WriteLine("Connection Clear Start...");
                    var servers = await ListProxyServer();
                    foreach (var server in servers.ToArray())
                    {
                        foreach (var session in server.Sessions.ToArray())
                        {
                            if (session.ClientEndPoint == null)
                            {
                                try
                                {
                                    await session.Disconnect();
                                }
                                catch { }
                            }
                        }
                    }
                    Console.WriteLine("Connection Clear Stop...");
                });
        }

        public Task AddProxyServer(IProxyServer proxyServer)
        {
            _proxyServerDict[proxyServer.Id] = proxyServer;
            return proxyServer.Start();
        }

        public async Task<IProxyServer> GetProxyServer(Guid proxyServerId)
        {
            if (_proxyServerDict.TryGetValue(proxyServerId, out IProxyServer proxyServer))
            {
                return proxyServer;
            }
            return null;
        }

        public async Task<IEnumerable<IProxyServer>> ListProxyServer()
        {
            return _proxyServerDict.Values.ToArray();
        }

        public async Task RemoveProxyServer(Guid proxyServerId)
        {
            _proxyServerDict.TryRemove(proxyServerId, out IProxyServer proxyServer);
            await proxyServer.Stop();
        }
    }
}
