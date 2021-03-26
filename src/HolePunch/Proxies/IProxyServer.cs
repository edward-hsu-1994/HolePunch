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
        Guid Id { get; }
        IReadOnlyCollection<IProxySession> Sessions { get; }
        ProxyServerStatus Status { get; }
        int ListenPort { get; }
        IPEndPoint ForwardEndPoint { get; }

        event Action<IProxySession> OnConnected;
        event Action<IProxySession> OnDisconnected;

        Task Start();
        Task Stop();
    }
}
