﻿using HolePunch.Domain;
using HolePunch.Proxies;
using HolePunch.Services;
using HolePunch.Shared;
using HolePunch.Web.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
    public class UserController : ControllerBase
    {
        private readonly ILogger<ServiceController> _logger;
        private readonly IUserService _userService;
        private readonly IUserGroupService _userGroupService;
        private readonly JwtHelper<DefaultJwtTokenModel> _jwtHelper;
        public UserController(ILogger<ServiceController> logger, IUserService userService, IUserGroupService userGroupService, JwtHelper<DefaultJwtTokenModel> jwtHelper)
        {
            _logger = logger;
            _userService = userService;
            _userGroupService = userGroupService;
            _jwtHelper = jwtHelper;
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

        [HttpGet("groups/{userGroupId}/member")]
        public Task<IEnumerable<User>> ListUserGroupMember(int userGroupId)
        {
            return _userGroupService.ListUserGroupMember(userGroupId);
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

        [HttpPut("{userId}/groups")]
        public Task UpdateWhereUserGroup(int userId, [FromBody] int[] groups)
        {
            return _userGroupService.UpdateWhereUserGroup(userId, groups);
        }
        #endregion

        [Authorize(Roles = "Admin, User")]
        [HttpPut("current/password")]
        public Task ChangeCurrentUserPassword([FromBody] PasswordModel model)
        {
            var tokenStr = this.Request.Headers["Authorization"][0];

            var userId = int.Parse(_jwtHelper.DecodeJwt(tokenStr).UserId);
            return _userService.UpdatePassword(userId, model.Password);
        }

        [Authorize(Roles = "Admin, User")]
        [HttpGet("isAdmin")]
        public async Task<bool> IsAdmin()
        {
            var tokenStr = this.Request.Headers["Authorization"][0];

            var role = _jwtHelper.DecodeJwt(tokenStr).Role;
            return role == "Admin";
        }

        [HttpPut("{userId}/password")]
        public Task ChangePassword(int userId, [FromBody] PasswordModel model)
        {
            return _userService.UpdatePassword(userId, model.Password);
        }

        [AllowAnonymous]
        [HttpPost("authorize")]
        public async Task<string> Login([FromBody] LoginInputModel loginInput)
        {
            return await _userService.LoginAndGenerateJwtToken(loginInput.Account, loginInput.Password);
        }
    }
}
