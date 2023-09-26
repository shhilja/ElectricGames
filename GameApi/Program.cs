using GameApi.Models;
using GameApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(
    options =>
    {
        options.AddPolicy("AllowAnyOrigin",
            policies => policies
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod());
    }
);

// Add services to the container.
builder.Services.Configure<GameDatabaseSettings>(
    builder.Configuration.GetSection("GameDatabase"));

builder.Services.AddSingleton<GamesService>();

builder.Services.AddControllers()
    .AddJsonOptions(
        options => options.JsonSerializerOptions.PropertyNamingPolicy = null);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(options);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseCors("AllowAnyOrigin");  

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
