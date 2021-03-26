using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Proxies
{
    public interface IProxySession
    {
        event Action<IProxySession> OnConnected;
        event Action<IProxySession> OnDisconnected;

        IPEndPoint ClientEndPoint { get; }
        IPEndPoint ForwardEndPoint { get; }
        ProxySessionStatus Status { get; }

        Task Connect();
        Task Disconnect();
    }
}
