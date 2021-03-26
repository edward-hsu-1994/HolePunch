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
    public class TcpProxyServer : TcpProxyServerBase
    {
        public TcpProxyServer(IPEndPoint forwardEndPoint, int listenPort = 0) : base(forwardEndPoint, listenPort)
        {

        }

        public override async Task<bool> AuthorizeConnection(TcpClient tcpClient)
        {
            return true;
        }
    }
}
