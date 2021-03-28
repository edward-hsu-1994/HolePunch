using HolePunch.Domain;
using HolePunch.Services;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ef = HolePunch.Accesses.Repositories;

namespace HolePunch.Accesses.Domain
{
    public class UserGroupService : IUserGroupService
    {
        private readonly ef.HolePunchContext _context;
        private readonly IServiceProvider _sp;

        public UserGroupService(ef.HolePunchContext context, IServiceProvider sp)
        {
            _context = context;
            _sp = sp;
        }

        public async Task<IEnumerable<UserGroup>> ListUserGroup()
        {
            return _context.UserGroup.Select(ef.UserGroup.GetToDomainExpression());
        }

        public Task<UserGroup> GetUserGroup(int userGroupId)
        {
            return _context.UserGroup.Select(ef.UserGroup.GetToDomainExpression()).SingleOrDefaultAsync(x => x.Id == userGroupId);
        }

        public async Task<UserGroup> CreateUserGroup(UserGroup userGroup)
        {
            var instance = ef.UserGroup.FromDomain(userGroup);
            _context.UserGroup.Add(instance);
            await _context.SaveChangesAsync();
            return instance.ToDomain();
        }

        public async Task<UserGroup> UpdateUserGroup(UserGroup userGroup)
        {
            var instance = await _context.UserGroup.SingleOrDefaultAsync(x => x.Id == userGroup.Id);
            instance.Name = userGroup.Name;
            instance.IsAdmin = userGroup.IsAdmin;
            await _context.SaveChangesAsync();

            await _sp.GetService<ProxyService>().ReflashAllProxyServerAllowRules();

            return instance.ToDomain();
        }

        public async Task DeleteUserGroup(int userGroupId)
        {
            _context.RemoveRange(_context.UserGroupMember.Where(x => x.UserGroupId == userGroupId));
            _context.RemoveRange(_context.UserGroup.Where(x => x.Id == userGroupId));
            await _context.SaveChangesAsync();
            await _sp.GetService<ProxyService>().ReflashAllProxyServerAllowRules();
        }

        public async Task<IEnumerable<User>> ListUserGroupMember(int userGroupId)
        {
            return _context.User
                .Where(x => _context.UserGroupMember.Where(x => x.UserGroupId == userGroupId).Select(x => x.UserId).Contains(x.Id))
                .Select(ef.User.GetToDomainExpression());
        }

        public async Task AddUserGroupMember(int userGroupId, int userId)
        {
            await RemoveUserGroupMember(userGroupId, userId);
            _context.UserGroupMember.Add(new ef.UserGroupMember()
            {
                UserGroupId = userGroupId,
                UserId = userId
            });
            await _context.SaveChangesAsync();
            await _sp.GetService<ProxyService>().ReflashAllProxyServerAllowRules();
        }

        public async Task RemoveUserGroupMember(int userGroupId, int userId)
        {
            _context.RemoveRange(_context.UserGroupMember.Where(x => x.UserGroupId == userGroupId && x.UserId == userId));
            await _context.SaveChangesAsync();
            await _sp.GetService<ProxyService>().ReflashAllProxyServerAllowRules();
        }
    }
}
