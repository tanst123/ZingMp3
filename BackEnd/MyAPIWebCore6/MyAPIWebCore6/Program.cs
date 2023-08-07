using Microsoft.EntityFrameworkCore;
using MyAPIWebCore6.Data;
using MyAPIWebCore6.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MenuStoreContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("MenuStore")));
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddScoped<IMenuItemRepository, MenuItemRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(builder =>
{
    builder.AllowAnyHeader()
            .AllowAnyMethod()
            .AllowAnyOrigin();
});
app.MapControllers();

app.Run();
