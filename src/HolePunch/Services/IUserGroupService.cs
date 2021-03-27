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
        Task<CidrGroup> GetUserGroup(int userGroupId);
        Task<CidrGroup> CreateUserGroup(UserGroup userGroup);
        Task<CidrGroup> UpdateUserGroup(UserGroup userGroup);
        Task DeleteUserGroup(int userGroupId);

        Task<IEnumerable<User>> ListUserGroupMember(int userGroupId);
        Task AddUserGroupMember(int userGroupId, int userId);
        Task RemoveUserGroupMember(int userGroupId, int userId);
    }
}
