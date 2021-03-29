using HolePunch.Domain;

using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace HolePunch.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> ListUser();
        Task<User> GetUser(int userId);
        Task<User> CreateUser(User user);
        Task<User> UpdateUser(User user);
        Task UpdatePassword(int userId, string password);
        Task<User> VerifyPassword(string account, string password);
        Task DeleteUser(int userId);

        Task<IPAddress> GetUserIP(int userId);
        Task SetUserIP(int userId, IPAddress ipAddress);

        Task<string> LoginAndGenerateJwtToken(string account, string password);
    }
}
