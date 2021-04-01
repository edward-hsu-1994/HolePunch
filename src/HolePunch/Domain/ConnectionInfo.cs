using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace HolePunch.Domain
{
    public class ConnectionInfo
    {
        public Guid SessionId { get; set; }
        public string ServiceName { get; set; }
        public string SourceEndPoint { get; set; }
        public string TargetEndPoint { get; set; }
        public int ServiceId { get; set; }
    }
}
