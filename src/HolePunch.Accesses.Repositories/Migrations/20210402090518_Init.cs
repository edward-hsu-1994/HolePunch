using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HolePunch.Accesses.Repositories.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "holepunch");

            migrationBuilder.CreateTable(
                name: "cidr_group",
                schema: "holepunch",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityAlwaysColumn),
                    name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false, comment: "名稱"),
                    cidr_list = table.Column<string[]>(type: "text[]", nullable: true, comment: "網段集合")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cidr_group", x => x.id);
                },
                comment: "網段組");

            migrationBuilder.CreateTable(
                name: "service",
                schema: "holepunch",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityAlwaysColumn),
                    name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false, comment: "服務名稱"),
                    port = table.Column<int>(type: "integer", nullable: false, comment: "服務Listen埠號"),
                    protocol = table.Column<string>(type: "character varying(16)", maxLength: 16, nullable: false, comment: "通訊協議(TCP/UDP)"),
                    logo_url = table.Column<string>(type: "character varying", nullable: true, comment: "服務Logo圖片網址"),
                    enabled = table.Column<bool>(type: "boolean", nullable: false, comment: "是否啟用")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_service", x => x.id);
                },
                comment: "服務");

            migrationBuilder.CreateTable(
                name: "service_allow_rule",
                schema: "holepunch",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityAlwaysColumn),
                    service_id = table.Column<int>(type: "integer", nullable: false, comment: "服務ID"),
                    service_forward_target_id = table.Column<int>(type: "integer", nullable: true, comment: "服務轉發目標ID，若為空則表示整個服務"),
                    type = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false, comment: "類型(CIDR_GROUP、CIDR、USER_GROUP、USER)"),
                    cidr_group_id = table.Column<int>(type: "integer", nullable: true, comment: "網段組"),
                    cidr = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: true, comment: "網段"),
                    user_group_id = table.Column<int>(type: "integer", nullable: true, comment: "使用者群組"),
                    user_id = table.Column<int>(type: "integer", nullable: true, comment: "使用者ID")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_service_allow_rule", x => x.id);
                },
                comment: "容許網段");

            migrationBuilder.CreateTable(
                name: "service_forward_target",
                schema: "holepunch",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityAlwaysColumn),
                    service_id = table.Column<int>(type: "integer", nullable: false, comment: "服務ID"),
                    name = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false, comment: "轉發目標名稱"),
                    ip_address = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false, comment: "IP"),
                    port = table.Column<int>(type: "integer", nullable: false, comment: "埠號"),
                    priority = table.Column<int>(type: "integer", nullable: false, comment: "優先權(0最大)"),
                    enabled = table.Column<bool>(type: "boolean", nullable: false, comment: "是否啟用")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_service_forward_target", x => x.id);
                },
                comment: "服務轉發目標");

            migrationBuilder.CreateTable(
                name: "user",
                schema: "holepunch",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityAlwaysColumn),
                    account = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false, comment: "帳號"),
                    password = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false, comment: "密碼(SHA1)"),
                    name = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: true, comment: "名稱"),
                    enabled = table.Column<bool>(type: "boolean", nullable: false, comment: "是否啟用")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user", x => x.id);
                },
                comment: "用戶");

            migrationBuilder.CreateTable(
                name: "user_group",
                schema: "holepunch",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityAlwaysColumn),
                    name = table.Column<string>(type: "character varying(255)", maxLength: 255, nullable: false, comment: "名稱"),
                    is_admin = table.Column<bool>(type: "boolean", nullable: false, comment: "是否為管理者")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_group", x => x.id);
                },
                comment: "使用者群組");

            migrationBuilder.CreateTable(
                name: "user_group_member",
                schema: "holepunch",
                columns: table => new
                {
                    user_group_id = table.Column<int>(type: "integer", nullable: false, comment: "使用者群組ID"),
                    user_id = table.Column<int>(type: "integer", nullable: false, comment: "使用者ID")
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_user_group_member", x => new { x.user_group_id, x.user_id });
                },
                comment: "使用者群組成員");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "cidr_group",
                schema: "holepunch");

            migrationBuilder.DropTable(
                name: "service",
                schema: "holepunch");

            migrationBuilder.DropTable(
                name: "service_allow_rule",
                schema: "holepunch");

            migrationBuilder.DropTable(
                name: "service_forward_target",
                schema: "holepunch");

            migrationBuilder.DropTable(
                name: "user",
                schema: "holepunch");

            migrationBuilder.DropTable(
                name: "user_group",
                schema: "holepunch");

            migrationBuilder.DropTable(
                name: "user_group_member",
                schema: "holepunch");
        }
    }
}
