using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Proxies
{
    public interface IProxyServerHub
    {
        Task AddProxyServer(IProxyServer proxyServer);
        Task<IProxyServer> GetProxyServer(Guid proxyServerId);
        Task RemoveProxyServer(Guid proxyServerId);

    }
}
