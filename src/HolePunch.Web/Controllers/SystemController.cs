using HolePunch.Web.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HolePunch.Web.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class SystemController : ControllerBase
    {
        public static NetworkSpeed Speed { get; set; } = new NetworkSpeed();
        public NetworkSpeed GetNetworkSpeed()
        {
            return Speed;
        }
    }
}
