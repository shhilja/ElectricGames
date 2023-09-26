#nullable disable
using GameApi.Models;
using GameApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace GameApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GamesController : ControllerBase
{
    private readonly GamesService _gamesService;
    private readonly ILogger<GamesController> _logger;
    private readonly IWebHostEnvironment _hosting;
    public GamesController(ILogger<GamesController> logger, GamesService gamesService, IWebHostEnvironment hosting)
    {
        _logger = logger;
        _gamesService = gamesService;
        _hosting = hosting;
    }

    //public GamesController(GamesService gamesService) => _gamesService = gamesService;
    

    [HttpGet]
    public ActionResult<List<Game>> Get() 
    {
        return _gamesService.Get();
    }  

    //Get by objectId
    [HttpGet("{id:length(24)}")]
    public ActionResult<Game> GetByObjectId(string id)
    {
        var game = _gamesService.Get(id);

        if ( game is null )
        {
            return NotFound();
        }

        return game;
    }

    //Get by GameId
/*     [HttpGet("{GameId}")]
    public ActionResult<Game> GetByGameId(string GameId)
    {
        List<Game> allGames = _gamesService.Get();
        List<Game> gamesById = allGames.Where(game =>
        game.GameId.ToLower().Contains(GameId.ToLower())).ToList();
        if(gamesById == null)
        {
            return NoContent();
        } else if (gamesById.Count > 1) {
            var errorObjectResult = new ObjectResult("Duplicated game id");
            errorObjectResult.StatusCode = StatusCodes.Status500InternalServerError;
            return errorObjectResult;
        }
        return gamesById.FirstOrDefault();
    } */

    //Get by title
    [HttpGet("title/{Title}")]
    public ActionResult<List<Game>> GetGameByTitle(string title)
    {
        List<Game> allGames = _gamesService.Get();
        List<Game> gamesByTitle = allGames.Where(game =>
        game.Title.ToLower().Contains(title.ToLower())).ToList();
        if(gamesByTitle == null) {
            return NoContent();
        }
        return gamesByTitle;
    }

    [HttpPost]
    public IActionResult Post([FromBody] Game newGame)
    {
        _gamesService.Create(newGame);

        return CreatedAtAction(nameof(Post), new {id = newGame.Id}, newGame);
    }

    //Image
    [HttpPost]
    [Route("[action]")]
    public IActionResult UploadImage(IFormFile file)
    {
        string webrootPath = _hosting.WebRootPath;
        string imagePath = Path.Combine($"{webrootPath}/images/{file.FileName}");
        using(var fileStream = new FileStream(imagePath, FileMode.Create)) {
            file.CopyTo(fileStream);
        }
        return Ok();
    }

    [HttpPut("{Id}")]
    public IActionResult Update([FromRoute] string Id, [FromBody] Game updatedGame)
    {
        var game = _gamesService.Get(Id);

        if(game is null)
        {
            return NotFound();
        }

        _gamesService.Update(Id, updatedGame);
        return CreatedAtAction(nameof(Update), new {id = updatedGame.Id}, updatedGame);

    }

    [HttpDelete("{Id}")]
    public IActionResult DeleteById(string Id)
    {
        var game = _gamesService.Get(Id);
        if ( game is null)
        {
            return NotFound();
        }

        _gamesService.Remove(Id);
        return Ok();
    }
}