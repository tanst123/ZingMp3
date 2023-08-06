using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyAPIWebCore6.Migrations
{
    public partial class DBInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Menu",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Key = table.Column<int>(type: "int", nullable: false),
                    label = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    icon = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    type = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    MenuItemId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Menu", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Menu_Menu_MenuItemId",
                        column: x => x.MenuItemId,
                        principalTable: "Menu",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Menu_MenuItemId",
                table: "Menu",
                column: "MenuItemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Menu");
        }
    }
}
