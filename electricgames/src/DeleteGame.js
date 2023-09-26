import { useState} from "react";
import { useNavigate } from "react-router-dom";

const DeleteGame = ({onDeleteGame}) => {
    const navigate = useNavigate();
    const [id, setId] = useState("");

    async function handleSubmit (event) {
        event.preventDefault();
        try {
            await onDeleteGame(id);
            navigate("/games");
        } catch (error) {
            alert("No game with that Id");
        }
      
    }

    return(
        <>
        <div id="delete-page-container" className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                <form onSubmit={handleSubmit}>
                    
                    <h3 className="header-texts my-4">Delete a game:</h3>
                    <div>
                        <input type="text" id="delete-game"
                        className="form-control darkmode-input mb-3"
                        placeholder="Enter Game ID"
                        onChange={(e)=>setId(e.target.value)}></input>
                    </div>
                    <input type="submit" id="delete-btn"
                    className="btn btn-light px-5"
                     value="Delete Game"></input>
                </form>
                </div>

            </div>
    
        </div>

       
        </>
    )
}

export default DeleteGame;