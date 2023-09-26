import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import NavBar from "./NavBar";


const AddGame = ({onAddGame}) => {
    const navigate = useNavigate();

    const [Title, setTitle] = useState("");
    const [Platform, setPlatform] = useState("");
    const [Publisher, setPublisher] = useState("");
    const [Genre, setGenre] = useState("");
    const [ReleaseYear, setReleaseYear] = useState("");
    const [Info, setInfo] = useState("");
    const [File, setFile] = useState("");
    const [selectedImage, setSelectedImage] = useState("");
    const [newGame, setNewGame] = useState([]);
    

    useEffect(() => {
        setNewGame({Title, Platform, Publisher, Genre, ReleaseYear, Info, File})
    }, [Title, Platform, Publisher, Genre, ReleaseYear, Info, File])

    const handleFileSelect = (event) => {
        setSelectedImage(event.target.files[0]);
        setFile(event.target.files[0].name);
    }

    async function handleSubmit (event) {
        event.preventDefault();
        await onAddGame(newGame, selectedImage);
        navigate("/games")
    }

    return(
        <>
        <NavBar />
        <div className="container">
            <h3 className="header-texts my-4">Add a new game: </h3>
            <form onSubmit={handleSubmit}>
    
                <div className="row">
                    <div className="col-12 col-md-6">

                        <input type="text" id="add-game-title" 
                        className="form-control darkmode-input mb-3"
                        placeholder="Enter Game title" 
                        onChange={(e)=>setTitle(e.target.value)}></input>

                        <input type="text" id="add-game-platform" 
                        className="form-control darkmode-input mb-3"
                        placeholder="Enter platform" 
                        onChange={(e)=>setPlatform(e.target.value)}></input>

                        <input type="text" id="add-game-publisher" 
                        className="form-control darkmode-input mb-3"
                        placeholder="Enter publisher" 
                        onChange={(e)=>setPublisher(e.target.value)}></input>

                        <input type="text" id="add-game-genre" 
                         className="form-control darkmode-input mb-3"
                        placeholder="Enter genre" 
                        onChange={(e)=>setGenre(e.target.value)}></input>
                    </div>
                   
                    <div className="col-12 col-md-6">

                        <input type="number" min="1930" max="2025" id="add-game-releaseYear"
                         className="form-control darkmode-input mb-3" 
                        placeholder="Enter releaseYear" 
                        onChange={(e)=>setReleaseYear(e.target.value)}></input>

                        <textarea rows="3" type="text" id="add-game-info" 
                         className="form-control darkmode-input mb-3"
                        placeholder="Enter Game info" 
                        onChange={(e)=>setInfo(e.target.value)}></textarea>

                        <input type="file" id="add-game-image" 
                         className="form-control darkmode-input mb-3"
                        onChange={handleFileSelect}></input>

                    </div>
                </div>
                <input type="submit" id="add-btn" className="btn px-5 btn-light" value="Submit"></input>

            </form>
        </div>
        </>
    )

}

export default AddGame;