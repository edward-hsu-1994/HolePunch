using HolePunch.Domain;

using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> ListCidrGroup();
        Task<User> GetUser(int userId);
        Task<User> CreateUser(User user);
        Task<User> UpdateUser(User user);
        Task<User> UpdatePassword(int userId, string password);
        Task<User> VerifyPassword(string account, string password);
        Task DeleteUser(int userId);
    }
}
