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
using Firewall;
using Microsoft.AspNetCore.Http;

namespace HolePunch.Accesses.Proxies
{
    public class FirewallTcpProxyServer : TcpProxyServerBase
    {
        private List<CIDRNotation> _allow_cidrs;
        public IReadOnlyList<CIDRNotation> AllowCidrList => _allow_cidrs?.AsReadOnly();
        private IFirewallRule _firewallRule = null;

        public FirewallTcpProxyServer(IPEndPoint forwardEndPoint, int listenPort = 0) : base(forwardEndPoint, listenPort)
        {
            _allow_cidrs = new List<CIDRNotation>();
        }

        public override async Task<bool> AuthorizeConnection(TcpClient tcpClient)
        {
            return VerifyIPEndPoint(((IPEndPoint)tcpClient.Client.RemoteEndPoint).Address);
        }

        private void InitFirewallRules()
        {
            _firewallRule = FirewallRulesEngine.DenyAllAccess();
            if (_allow_cidrs != null && _allow_cidrs.Any())
            {
                _firewallRule = _firewallRule.ExceptFromIPAddressRanges(_allow_cidrs.ToList());
            }
        }

        public bool VerifyIPEndPoint(IPAddress address)
        {
            InitFirewallRules();

            var httpContext = new DefaultHttpContext();
            httpContext.Connection.RemoteIpAddress = address;

            return _firewallRule.IsAllowed(httpContext);
        }

        public async Task UpdateAllowCidrList(IEnumerable<CIDRNotation> cidrs)
        {
            _allow_cidrs = cidrs.ToArray().ToList();

            foreach (var session in Sessions)
            {
                if (session.ClientEndPoint == null)
                {
                    continue;
                }
                if (!VerifyIPEndPoint(session.ClientEndPoint.Address))
                {
                    await session.Disconnect();
                }
            }
        }
    }
}
