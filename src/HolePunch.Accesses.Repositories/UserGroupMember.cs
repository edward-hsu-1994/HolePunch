﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HolePunch.Accesses.Repositories
{
    /// <summary>
    /// 使用者群組成員
    /// </summary>
    [Table("user_group_member", Schema = "holepunch")]
    public partial class UserGroupMember
    {
        /// <summary>
        /// 使用者群組ID
        /// </summary>
        [Key]
        [Column("user_group_id")]
        public int UserGroupId { get; set; }
        /// <summary>
        /// 使用者ID
        /// </summary>
        [Key]
        [Column("user_id")]
        public int UserId { get; set; }
    }
}