using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Proxies
{
    public interface IProxyServer
    {
        IReadOnlyCollection<IProxySession> Sessions { get; }
        ProxyServerStatus Status { get; }
        int ListenPort { get; }
        public IPEndPoint ForwardEndPoint { get; }
        Task Start();
        Task Stop();
    }
}
