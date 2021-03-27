using HolePunch.Proxies;

using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Accesses
{
    public class TcpProxyServerHub : IProxyServerHub
    {
        private readonly ConcurrentDictionary<Guid, IProxyServer> _proxyServerDict;

        public TcpProxyServerHub()
        {
            _proxyServerDict = new ConcurrentDictionary<Guid, IProxyServer>();
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

        public async Task RemoveProxyServer(Guid proxyServerId)
        {
            _proxyServerDict.TryRemove(proxyServerId, out IProxyServer proxyServer);
            await proxyServer.Stop();
        }
    }
}
