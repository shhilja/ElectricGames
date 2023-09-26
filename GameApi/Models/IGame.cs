namespace GameApi.Models;

public interface IGame
{
    string Id {get; set;}

    string Title {get; set;}
    string Platform {get; set;}
    string Publisher {get; set;}
    string Genre {get; set;}
    int ReleaseYear {get; set;}
    string Info {get; set;}


}