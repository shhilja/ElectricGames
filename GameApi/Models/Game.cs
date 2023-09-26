using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace GameApi.Models;

public class Game : IGame
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id {get; set;}

    public string Title {get; set;} = null!;
    public string Platform {get; set;} = null!;
    public string Publisher {get; set;} = null!;
    public string Genre {get; set;} = null!;
    public int ReleaseYear {get; set;} 
    public string Info {get; set;} = null!;
    public string File {get; set;} = null!;


}