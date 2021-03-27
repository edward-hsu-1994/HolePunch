using HolePunch.Proxies;

using System;
using System.Collections.Generic;
using System.Text;

namespace HolePunch.Domain
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Port { get; set; }
        public int RealPort { get; set; }
        public ServiceProtocols Protocol { get; set; } = ServiceProtocols.TCP;
        public string LogoUrl { get; set; }
        public bool Enabled { get; set; }
        public ProxyServerStatus Status { get; set; }
    }
}
