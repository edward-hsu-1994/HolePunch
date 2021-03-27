using HolePunch.Domain;
using HolePunch.Services;

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
        public UserGroupService(ef.HolePunchContext context)
        {
            _context = context;
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
            return instance.ToDomain();
        }

        public Task DeleteUserGroup(int userGroupId)
        {
            _context.RemoveRange(_context.UserGroup.Where(x => x.Id == userGroupId));
            return _context.SaveChangesAsync();
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
        }

        public Task RemoveUserGroupMember(int userGroupId, int userId)
        {
            _context.RemoveRange(_context.UserGroupMember.Where(x => x.UserGroupId == userGroupId && x.UserId == userId));
            return _context.SaveChangesAsync();
        }
    }
}
