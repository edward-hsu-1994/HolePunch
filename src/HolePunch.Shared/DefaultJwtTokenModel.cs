using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Text.Json.Serialization;

namespace HolePunch.Shared
{
    /// <summary>
    /// 預設JWT內容模型
    /// </summary>
    public class DefaultJwtTokenModel
    {
        /// <summary>
        /// 存取權杖唯一識別號
        /// </summary>
        [JsonPropertyName("jti")]
        public string TokenId { get; set; }

        /// <summary>
        /// 存取權杖類型
        /// </summary>
        [JsonPropertyName("sub")]
        public string TokenType { get; set; }

        /// <summary>
        /// 登入唯一識別號
        /// </summary>
        [JsonPropertyName("loginId")]
        public string LoginId { get; set; }

        /// <summary>
        /// 登入提供者唯一識別號
        /// </summary>
        [JsonPropertyName("loginProviderId")]
        public string LoginProviderId { get; set; }

        /// <summary>
        /// 使用者唯一識別號
        /// </summary>
        [JsonPropertyName(ClaimTypes.PrimarySid)]
        public string UserId { get; set; }

        /// <summary>
        /// 使用者帳號
        /// </summary>
        [JsonPropertyName(ClaimTypes.NameIdentifier)]
        public string UserAccount { get; set; }

        /// <summary>
        /// 使用者名稱
        /// </summary>
        [JsonPropertyName(ClaimTypes.Name)]
        public string UserName { get; set; }

        /// <summary>
        /// 過期時間
        /// </summary>
        [JsonPropertyName("exp")]
        public long? Expiration { get; set; }
    }
}
