using HolePunch.Domain;
using HolePunch.Services;

using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

using Microsoft.Extensions.DependencyInjection;
using XPY.ToolKit.Utilities.Cryptography;

using ef = HolePunch.Accesses.Repositories;
using System.Net;
using HolePunch.Shared;

namespace HolePunch.Accesses.Domain
{
    public class UserService : IUserService
    {
        private readonly ef.HolePunchContext _context;
        private readonly IServiceProvider _sp;
        private readonly static ConcurrentDictionary<int, IPAddress> _userIpMap;
        private readonly JwtHelper<DefaultJwtTokenModel> _jwtHelper;

        static UserService()
        {
            _userIpMap = new ConcurrentDictionary<int, IPAddress>();
        }

        public UserService(ef.HolePunchContext context, IServiceProvider sp, JwtHelper<DefaultJwtTokenModel> jwtHelper)
        {
            _context = context;
            _sp = sp;
            _jwtHelper = jwtHelper;
        }

        public async Task<IEnumerable<User>> ListUser()
        {
            var result = await _context.User.Select(ef.User.GetToDomainExpression()).ToArrayAsync();

            foreach (var user in result)
            {
                user.CurrentIP = GetUserIP(user.Id)?.ToString();
            }

            return result;
        }

        public async Task<User> GetUser(int userId)
        {
            var user = await _context.User.Where(x => x.Id == userId).Select(ef.User.GetToDomainExpression()).SingleOrDefaultAsync();

            user.CurrentIP = GetUserIP(user.Id)?.ToString();

            return user;
        }

        public async Task<User> CreateUser(User user)
        {
            var instance = ef.User.FromDomain(user);
            instance.Password = "";
            _context.User.Add(instance);
            await _context.SaveChangesAsync();
            return instance.ToDomain();
        }

        public async Task<User> UpdateUser(User user)
        {
            var instance = await GetUser(user.Id);
            instance.Account = user.Account;
            instance.Name = user.Name;
            instance.Enabled = user.Enabled;

            await _context.SaveChangesAsync();

            await _sp.GetService<ProxyService>().ReflashAllProxyServerAllowRules();

            return instance;
        }

        public async Task DeleteUser(int userId)
        {
            _context.RemoveRange(_context.User.Where(x => x.Id == userId));
            await _context.SaveChangesAsync();
            await _sp.GetService<ProxyService>().ReflashAllProxyServerAllowRules();
        }

        public async Task UpdatePassword(int userId, string password)
        {
            var passwordHash = (password + "@holepunch").ToHashString<SHA1>(false);
            var instance = await _context.User.SingleOrDefaultAsync(x => x.Id == userId);

            instance.Password = passwordHash;

            await _context.SaveChangesAsync();
        }

        public Task<User> VerifyPassword(string account, string password)
        {
            var passwordHash = (password + "@holepunch").ToHashString<SHA1>(false);
            return _context.User
                .Where(x => x.Account == account && x.Password == passwordHash)
                .Select(ef.User.GetToDomainExpression())
                .SingleOrDefaultAsync();
        }

        public async Task<IPAddress> GetUserIP(int userId)
        {
            if (_userIpMap.TryGetValue(userId, out IPAddress ip))
            {
                return ip;
            }
            return null;
        }

        public async Task SetUserIP(int userId, IPAddress ipAddress)
        {
            _userIpMap[userId] = ipAddress;
            await _sp.GetService<ProxyService>().ReflashAllProxyServerAllowRules();
        }


        public async Task<string> LoginAndGenerateJwtToken(string account, string password)
        {
            var user = await VerifyPassword(account, password);
            if (user == null)
            {
                return null;
            }

            var isAdmin =
                await _context.UserGroup.Where(x => x.IsAdmin).Select(x => x.Id)
                .Intersect(_context.UserGroupMember.Where(x => x.UserId == user.Id)
                .Select(x => x.UserGroupId)).AnyAsync();

            return _jwtHelper.EncodeJwt(new DefaultJwtTokenModel()
            {
                LoginId = Guid.NewGuid().ToString(),
                Expiration = DateTimeOffset.UtcNow.AddDays(1).ToUnixTimeSeconds(),
                TokenId = Guid.NewGuid().ToString(),
                TokenType = "LOGIN",
                UserAccount = account,
                LoginProviderId = null,
                UserId = user.Id.ToString(),
                Role = isAdmin ? "Admin" : "User"
            });
        }
    }
}
