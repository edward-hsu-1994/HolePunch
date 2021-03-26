using Firewall;

using System;
using System.Net;

namespace HolePunch.Accesses.Proxies.TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            var proxyServer = new FirewallTcpProxyServer(IPEndPoint.Parse("192.168.31.1:80"));
            proxyServer.OnConnected += (session) =>
            {
                Console.WriteLine("New Connection");
            };
            proxyServer.Start().Wait();

            Console.WriteLine($"Port: {proxyServer.ListenPort}");

            proxyServer.UpdateAllowCidrList(new CIDRNotation[] { CIDRNotation.Parse("0.0.0.0/0") });

            Console.Read();
        }
    }
}
