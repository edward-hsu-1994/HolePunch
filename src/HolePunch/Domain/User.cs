using System;
using System.Collections.Generic;
using System.Text;

namespace HolePunch.Domain
{
    public class User
    {
        public int Id { get; set; }
        public string Account { get; set; }
        public string Name { get; set; }
        public bool Enabled { get; set; }
        public string CurrentIP { get; set; }
    }
}

