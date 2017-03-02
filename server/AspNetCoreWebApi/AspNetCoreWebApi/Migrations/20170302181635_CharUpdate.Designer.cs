using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using AspNetCoreWebApi.Data;

namespace AspNetCoreWebApi.Migrations
{
    [DbContext(typeof(GoTContext))]
    [Migration("20170302181635_CharUpdate")]
    partial class CharUpdate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AspNetCoreWebApi.Models.Character", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Age");

                    b.Property<bool>("Dead");

                    b.Property<string>("House");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Characters");
                });
        }
    }
}
