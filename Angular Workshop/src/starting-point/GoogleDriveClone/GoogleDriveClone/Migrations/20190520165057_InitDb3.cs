using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GoogleDriveClone.Migrations
{
    public partial class InitDb3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Media");

            migrationBuilder.CreateTable(
                name: "Asset",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateModified = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Path = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Asset", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Asset",
                columns: new[] { "Id", "DateCreated", "DateModified", "IsDeleted", "Name", "Path", "Type" },
                values: new object[] { 1, new DateTime(2019, 5, 20, 23, 50, 57, 496, DateTimeKind.Local).AddTicks(5266), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), false, "angular logo", "assets/angular.jpg", 6 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Asset");

            migrationBuilder.CreateTable(
                name: "Media",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateModified = table.Column<DateTime>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Path = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Media", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Media",
                columns: new[] { "Id", "DateCreated", "DateModified", "IsDeleted", "Name", "Path", "Type" },
                values: new object[] { 1, new DateTime(2019, 5, 20, 22, 44, 43, 666, DateTimeKind.Local).AddTicks(2194), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), false, "angular logo", "assets/angular.jpg", 6 });
        }
    }
}
