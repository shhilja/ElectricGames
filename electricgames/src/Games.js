
import GameCard from "./GameCard.js";

const Games = ({searchResults}) => {

    const results = searchResults.map((game) => {
      
        return(
            <GameCard className="gx-3 col-12 col-md-6 col-lg-4 col-xl-3"
                key={game.Id}
                id={game.Id}
                title={game.Title}
                platform={game.Platform}
                publisher={game.Publisher}
                genre={game.Genre}
                releaseYear={game.ReleaseYear}
                info={game.Info}
                file={game.File}/>
        )

})

const content = results?.length ? results : <article className="text-center"><p className="text-white">No Games matching you search....</p></article>
return(
    <>
    <div className="container mb-5">
        <div className="row g-4">{content}</div>
    </div>
    </>
)

}

export default Games;