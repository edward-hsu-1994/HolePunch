using HolePunch.Domain;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Services
{
    public interface IUserGroupService
    {
        Task<IEnumerable<UserGroup>> ListUserGroup();
        Task<UserGroup> GetUserGroup(int userGroupId);
        Task<UserGroup> CreateUserGroup(UserGroup userGroup);
        Task<UserGroup> UpdateUserGroup(UserGroup userGroup);
        Task DeleteUserGroup(int userGroupId);

        Task<IEnumerable<User>> ListUserGroupMember(int userGroupId);
        Task AddUserGroupMember(int userGroupId, int userId);
        Task RemoveUserGroupMember(int userGroupId, int userId);
    }
}
