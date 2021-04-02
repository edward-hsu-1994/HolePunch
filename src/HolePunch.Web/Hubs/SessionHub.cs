using HolePunch.Services;
using HolePunch.Shared;

using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Primitives;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace HolePunch.Web.Hubs
{
    public class SessionHub : Hub
    {
        private readonly IUserService _userService;
        private readonly IAuthorizeService _authorizeService;
        private readonly IConfiguration _configuration;

        public SessionHub(IConfiguration configuration, IUserService userService, IAuthorizeService authorizeService)
        {
            _userService = userService;
            _authorizeService = authorizeService;
            _configuration = configuration;
        }

        public override async Task OnConnectedAsync()
        {
            var context = this.Context.GetHttpContext();
            if (context?.Connection?.RemoteIpAddress == null)
            {
                Console.WriteLine("SignalR Abort: No IP Address");
                Context.Abort();
                return;
            }

            if (!context.Request.Query.TryGetValue("access_token", out StringValues jwt))
            {
                Console.WriteLine("SignalR Abort: No access_token Query");

                Context.Abort();
                return;
            }

            if (!_authorizeService.VerifyJwt(jwt.ToString(), out DefaultJwtTokenModel tokenModel))
            {
                Console.WriteLine("SignalR Abort: JWT Error");

                Context.Abort();
                return;
            }

            var ip = context.Connection.RemoteIpAddress;
            var header = _configuration["FORWARD_HEADER"];
            if (!string.IsNullOrWhiteSpace(header) &&
                context.Request.Headers.TryGetValue(header, out StringValues headerValues))
            {
                ip = IPAddress.Parse(headerValues[0]);
            }

            Console.WriteLine($"SET User IP={tokenModel.UserId}=>{ip}");
            await _userService.SetUserIP(int.Parse(tokenModel.UserId), ip);
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var context = this.Context.GetHttpContext();
            if (context?.Connection?.RemoteIpAddress == null)
            {
                return;
            }

            if (!context.Request.Query.TryGetValue("access_token", out StringValues jwt))
            {
                return;
            }

            if (!_authorizeService.VerifyJwt(jwt.ToString(), out DefaultJwtTokenModel tokenModel))
            {
                return;
            }

            Console.WriteLine($"SET User IP={tokenModel.UserId}=>null");
            await _userService.SetUserIP(int.Parse(tokenModel.UserId), null);
        }
    }
}
