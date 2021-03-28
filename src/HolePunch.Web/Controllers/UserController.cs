using HolePunch.Domain;
using HolePunch.Proxies;
using HolePunch.Services;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HolePunch.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<ServiceController> _logger;
        private readonly IUserService _userService;
        private readonly IUserGroupService _userGroupService;

        public UserController(ILogger<ServiceController> logger, IUserService userService, IUserGroupService userGroupService)
        {
            _logger = logger;
            _userService = userService;
            _userGroupService = userGroupService;
        }

        [HttpGet]
        public Task<IEnumerable<User>> ListUser()
        {
            return _userService.ListUser();
        }

        [HttpGet("{userId}")]
        public Task<User> GetUser(int userId)
        {
            return _userService.GetUser(userId);
        }

        [HttpPost]
        public Task<User> CreateUser([FromBody] User user)
        {
            return _userService.CreateUser(user);
        }

        [HttpPut]
        public Task<User> UpdateUser([FromBody] User user)
        {
            return _userService.UpdateUser(user);
        }

        [HttpDelete("{userId}")]
        public Task DeleteUser(int userId)
        {
            return _userService.DeleteUser(userId);
        }


        #region UserGroup
        [HttpGet("groups")]
        public Task<IEnumerable<UserGroup>> ListUserGroup()
        {
            return _userGroupService.ListUserGroup();
        }

        [HttpGet("groups/{userGroupId}")]
        public Task<UserGroup> GetUserGroup(int userGroupId)
        {
            return _userGroupService.GetUserGroup(userGroupId);
        }

        [HttpPost("groups")]
        public Task<UserGroup> CreateUserGroup([FromBody] UserGroup userGroup)
        {
            return _userGroupService.CreateUserGroup(userGroup);
        }

        [HttpPut("groups")]
        public Task<UserGroup> UpdateUserGroup([FromBody] UserGroup userGroup)
        {
            return _userGroupService.UpdateUserGroup(userGroup);
        }

        [HttpDelete("groups/{userGroupId}")]
        public Task DeleteUserGroup(int userGroupId)
        {
            return _userGroupService.DeleteUserGroup(userGroupId);
        }

        [HttpPost("groups/{userGroupId}/member/{userId}")]
        public Task AddUserGroupMember(int userGroupId, int userId)
        {
            return _userGroupService.AddUserGroupMember(userGroupId, userId);
        }

        [HttpDelete("groups/{userGroupId}/member/{userId}")]
        public Task RemoveUserGroupMember(int userGroupId, int userId)
        {
            return _userGroupService.RemoveUserGroupMember(userGroupId, userId);
        }
        #endregion

        [HttpPut("{userId}/password")]
        public Task ChangePassword(int userId, [FromBody] string password)
        {
            return _userService.UpdatePassword(userId, password);
        }
    }
}
