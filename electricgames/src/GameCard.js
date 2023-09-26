

const imageUrl = "https://localhost:7051/images";


const GameCard = ({id, title, info, file, platform, publisher, genre, releaseYear, className}) => {
    return(
      <div className={className}>
        <div className="game-card card h-100 shadow">
          <img src={`${imageUrl}/${encodeURIComponent(file)}`} className="card-img-top img-fluid game-card-img" alt=""></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 id="card-id-text" className="card-subtitle mb-2">Id: {id}</h6>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Platform: {platform}</li>
            <li className="list-group-item">Genre: {genre}</li>
            <li className="list-group-item">Publisher: {publisher}</li>
            <li className="list-group-item">Release year: {releaseYear}</li>
          </ul>
          <div className="card-body">
          <p className="card-text"><em>{info}</em></p>

          </div>
        </div>
      </div>

    )
}

export default GameCard;
