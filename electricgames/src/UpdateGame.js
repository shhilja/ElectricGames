import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "./GameCard";
import NavBar from "./NavBar";

const UpdateGame = ({onFetchGame, onUpdateGame, updatedGame, setUpdatedGame}) => {

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [publisher, setPublisher] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [info, setInfo] = useState("");
    const [file, setFile] = useState();
    const [selectedImage, setSelectedImage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setUpdatedGame({
            Id: updatedGame.Id,
            Title: title ? title : updatedGame.Title,
            Platform: platform ? platform : updatedGame.Platform,
            Publisher: publisher ? publisher : updatedGame.Publisher,
            Genre: genre ? genre : updatedGame.Genre,
            ReleaseYear: releaseYear ? releaseYear : updatedGame.ReleaseYear,
            Info: info ? info : updatedGame.Info,
            File: file ? file : updatedGame.File,
        })
    }, [id, title, platform, publisher, genre, releaseYear, info, file])

    const handleFileSelect = (event) => {
            setSelectedImage(event.target.files[0]);
            setFile(event.target.files[0].name)
  
    

    }

    const fetchGame = async (event) => {
        try {
            await onFetchGame(id);
        } catch (error) {
            alert("No game with that Id")
        }
       
    }

    const updateGame = async (event) => {
        await onUpdateGame(updatedGame, selectedImage);
        navigate("/games")
    }

    return(
        <>
        <NavBar />
       
        <div className="container">
        <h3 id="update-header" className="header-texts mt-3 mb-4">Update a Game Page</h3>
            <div className="row ">
                <div className="col-12 col-md-6">                
                    <input type="text" id="update-id" 
                    className="darkmode-input d-block mb-3 form-control " 
                    value={updatedGame.Id} 
                    placeholder="id" 
                    onChange={(e)=>setId(e.target.value)}></input>

                    <input type="text" id="update-title" 
                    className="d-block mb-3 form-control darkmode-input" 
                    value={updatedGame.Title} 
                    placeholder="title" 
                    onChange={(e)=>setTitle(e.target.value)}></input>

                    <input type="text" id="update-platfrom" 
                    className="d-block mb-3 form-control darkmode-input" 
                    value={updatedGame.Platform} 
                    placeholder="platform" 
                    onChange={(e)=>setPlatform(e.target.value)}></input>

                    <input type="text" id="update-genre" 
                    className="d-block mb-3 form-control darkmode-input" 
                    value={updatedGame.Genre} 
                    placeholder="genre" 
                    onChange={(e)=>setGenre(e.target.value)}></input>

                    <input type="text" id="update-publisher" 
                    className="d-block mb-3 form-control darkmode-input" 
                    value={updatedGame.Publisher} 
                    placeholder="publisher" 
                    onChange={(e)=>setPublisher(e.target.value)}></input>

                    <input type="number" min="1930" max="2025" id="update-releaseYear" 
                    className="d-block mb-3 form-control darkmode-input" 
                    value={updatedGame.ReleaseYear} 
                    placeholder="Enter releaseYear" 
                    onChange={(e)=>setReleaseYear(e.target.value)}></input>

                    <textarea type="text" rows="8" id="update-info" 
                    className="d-block form-control mb-3 darkmode-input" 
                    value={updatedGame.Info} 
                    placeholder="Enter game info" 
                    onChange={(e)=>setInfo(e.target.value)}></textarea>

                    <input type="file" id="update-image" 
                    className="d-block form-control mb-3 darkmode-input" 
                    onChange={handleFileSelect}></input>

                    <button id="fetch-btn" className="btn btn-light px-5 me-5 mb-5" onClick={fetchGame}>Fetch</button>
                    <button id="update-btn" className="btn px-5 btn-light mb-5" onClick={updateGame}>Update</button>
                </div>

        
        
                <div className="col-md-6">

                <GameCard className="col"
                                        
                                        id={updatedGame.Id}
                                        title={updatedGame.Title}
                                        platform={updatedGame.Platform}
                                        publisher={updatedGame.Publisher}
                                        genre={updatedGame.Genre}
                                        releaseYear={updatedGame.ReleaseYear}
                                        info={updatedGame.Info}
                                        file={updatedGame.File}/>

                        
                </div>
            </div>
        </div>
    </>
    )

}

export default UpdateGame;