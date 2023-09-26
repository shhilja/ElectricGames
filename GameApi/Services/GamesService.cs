using GameApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace GameApi.Services;

public class GamesService
{
    private readonly IMongoCollection<Game> _gamesCollection;

    public GamesService(IOptions<GameDatabaseSettings> gameDatabaseSettings)
        {
            var mongoClient = new MongoClient(gameDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(gameDatabaseSettings.Value.DatabaseName);

            _gamesCollection = mongoDatabase.GetCollection<Game>(gameDatabaseSettings.Value.CollectionName);
        }

        public List<Game> Get() => _gamesCollection.Find(_ => true).ToList();

        public Game? Get(string id) =>  _gamesCollection.Find(x => x.Id == id).FirstOrDefault();

        public void Create(Game newGame) => _gamesCollection.InsertOne(newGame);

        public void Update(string id, Game updatedGame) => _gamesCollection.ReplaceOne(x => x.Id == id, updatedGame);

        public void Remove(string id) => _gamesCollection.DeleteOne(x => x.Id == id);
    
}