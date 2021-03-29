using HolePunch.Services;
using HolePunch.Shared;

using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Primitives;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HolePunch.Web.Hubs
{
    public class SessionHub : Hub
    {
        private readonly IUserService _userService;
        private readonly IAuthorizeService _authorizeService;

        public SessionHub(IUserService userService, IAuthorizeService authorizeService)
        {
            _userService = userService;
            _authorizeService = authorizeService;
        }

        public override async Task OnConnectedAsync()
        {
            var context = this.Context.GetHttpContext();
            if (context?.Connection?.RemoteIpAddress == null)
            {
                Context.Abort();
                return;
            }
            /*
            if (!context.Request.Headers.TryGetValue("Authentication", out StringValues jwt))
            {
                Context.Abort();
                return;
            }

            if (!_authorizeService.VerifyJwt(jwt.ToString(), out DefaultJwtTokenModel tokenModel))
            {
                Context.Abort();
                return;
            }*/

            await _userService.SetUserIP(1, context.Connection.RemoteIpAddress);
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var context = this.Context.GetHttpContext();
            if (context?.Connection?.RemoteIpAddress == null)
            {
                return;
            }
            /*
            if (!context.Request.Headers.TryGetValue("Authentication", out StringValues jwt))
            {
                return;
            }

            if (!_authorizeService.VerifyJwt(jwt.ToString(), out DefaultJwtTokenModel tokenModel))
            {
                return;
            }*/

            await _userService.SetUserIP(1, null);
        }
    }
}
