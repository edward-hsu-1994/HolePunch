using JWT.Algorithms;
using JWT.Builder;

using Microsoft.Extensions.Options;

using System;
using System.Security.Cryptography;
using System.Text.Json;

using XPY.ToolKit.Utilities.Cryptography;

namespace HolePunch.Shared
{
    public class JwtHelper<TJwtTokenModel>
    {
        /// <summary>
        /// JWT選項
        /// </summary> 
        public IOptions<JwtOption> JwtOptions { get; private set; }

        /// <summary>
        /// 初始化 <see cref="JwtService"/>
        /// </summary> 
        public JwtHelper(IOptions<JwtOption> jwtOptions)
        {
            this.JwtOptions = jwtOptions;
        }

        /// <summary>
        /// 取得JWT建構器
        /// </summary>
        /// <returns>JWT建構器</returns>
        JwtBuilder GetJwtBuilder()
        {
            return new JwtBuilder()
                  .WithAlgorithm(new HMACSHA256Algorithm())
                  .WithSecret(JwtOptions.Value.SecureKey.ToHash<SHA512>())
                  .Issuer(JwtOptions.Value.Issuer)
                  .Audience(JwtOptions.Value.Audience);
        }

        /// <summary>
        /// 產生JWT
        /// </summary>
        /// <param name="tokenModel">JWT資訊</param>
        /// <returns>JWT</returns>
        public string EncodeJwt(TJwtTokenModel tokenModel)
        {
            var model = JsonDocument.Parse(JsonSerializer.Serialize(tokenModel));

            var builder = GetJwtBuilder();

            builder.AddClaim(ClaimName.IssuedAt, DateTimeOffset.UtcNow.ToUnixTimeSeconds());

            foreach (var kv in model.RootElement.EnumerateObject())
            {
                if (kv.Value.ValueKind == JsonValueKind.Null) continue;
                object value = null;
                switch (kv.Value.ValueKind)
                {
                    case JsonValueKind.True:
                    case JsonValueKind.False:
                        value = kv.Value.GetBoolean();
                        break;
                    case JsonValueKind.Number:
                        value = kv.Value.GetDouble();
                        break;
                    case JsonValueKind.String:
                        value = kv.Value.GetString();
                        break;
                }
                builder = builder.AddClaim(kv.Name, value);
            }

            return "Bearer " + builder.Encode();
        }

        /// <summary>
        /// 解碼並驗證JWT
        /// </summary>
        /// <param name="token">JWT</param>
        /// <returns>JWT資訊</returns>
        public TJwtTokenModel DecodeJwt(string token)
        {
            var tokenSegments = token.Split(" ");
            if (tokenSegments.Length > 1)
            {
                token = tokenSegments[1];
            }
            else
            {
                token = tokenSegments[0];
            }

            var builder = GetJwtBuilder();

            try
            {
                var json = builder.MustVerifySignature()
                    .Decode(token);

                return System.Text.Json.JsonSerializer.Deserialize<TJwtTokenModel>(json);
            }
            catch
            {
                return default(TJwtTokenModel);
            }
        }
    }
}
