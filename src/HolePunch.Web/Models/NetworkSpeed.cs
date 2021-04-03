using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HolePunch.Web.Models
{
    public class NetworkSpeed
    {
        public long In { get; set; }
        public long Out { get; set; }

        public long MaxIn { get; set; }
        public long MaxOut { get; set; }
    }
}
