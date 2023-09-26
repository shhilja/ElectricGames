import axios from "axios"
import {useEffect, useState} from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home"
import Games from "./Games"
import AddGame from "./AddGame.js"
import DeleteGame from "./DeleteGame.js"
import UpdateGame from "./UpdateGame"
import SearchBar from "./SearchBar"
import Quiz from "./Quiz"

export default function ReactGameApi() {


    const [games, setGames] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [newGameFlag, setNewGameFlag] = useState(false);
    const [deleteGameFlag, setdeleteGameFlag] = useState(false);
    const [updateGameFlag, setUpdateGameFlag] = useState(false);
    const [updatedGame, setUpdatedGame] = useState([]);

    const gameControllerUrl = "https://localhost:7051/api/games";


    useEffect(()=>{
        axios.get(gameControllerUrl)
        .then(response=>{
            setGames(response.data)
            setSearchResults(response.data)
        })
        .catch(error=>console.log(error))
    }, [newGameFlag, deleteGameFlag, updateGameFlag])




    /*--- DELETE ---*/

    const onDeleteGame = async(id) => {
        await axios.delete(`${gameControllerUrl}/${id}`)
        .then((response) => {
            setdeleteGameFlag(prev=>!prev)
            console.log(response)

        })
        .catch((error) => {
            console.log(error);
            throw(error)
  
        })
    }


      /*--- UPDATE ---*/
    const transformToInt = (key, value) => {
        if (key === "ReleaseYear") {
            if(!isNaN(value)) {
                value = Number(value)
            }
            
        }
        return value;
    }


      const onUpdateGame = async (updatedGame, selectedImage) => {
        if(selectedImage) {
        const formData = new FormData();
        formData.append("file", selectedImage);
        try {
            const response = await axios({
                method: "post",
                url: `${gameControllerUrl}/UploadImage`,
                data: formData,
                headers: {"Content-Type": "multipart/form-data"}
                
            })
            console.log("image posted")
        } catch(error) {
            console.log(error)
        }
        }

        await axios.put(`${gameControllerUrl}/${updatedGame.Id}`,
        JSON.stringify(updatedGame, transformToInt),
        {
            headers: {"Content-Type": "application/json"}
        })
        .then((response) => {
            setUpdatedGame({...updatedGame})
            setUpdateGameFlag(prev=>!prev)
        })
        .catch((error) => {
            console.log(error)
          
        } );
      }

      const onFetchGame = async (id) => {
        await axios.get(`${gameControllerUrl}/${id}`)
        .then((response) => {
            setUpdatedGame(response.data)
        })
        .catch((error) => {
            console.log(error)
            throw(error)
        });
      }

       /*--- ADD ---*/
    const onAddGame = async (newGame, selectedImage) => {
        console.log(JSON.stringify(newGame));
        await axios.post(gameControllerUrl,
        JSON.stringify(newGame, transformToInt),
        {
            headers: {
                "Content-Type": "application/json"
            }

        })
        .then((response)=>{setNewGameFlag(prev=>!prev)})
        .catch(error=>{console.log(error);});

        const formData = new FormData();
        formData.append("file", selectedImage);
        try {
            const response = await axios({
                method: "post",
                url: `${gameControllerUrl}/UploadImage`,
                data: formData,
                headers: {"Content-Type": "multipart/form-data"}
            });
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/games" element={<><SearchBar games={games}
                    setSearchResults={setSearchResults}/><Games searchResults={searchResults}/></>}></Route>
                <Route path="/add-delete" element={<><AddGame onAddGame={onAddGame}/><DeleteGame onDeleteGame={onDeleteGame}/></>}></Route>
                <Route path="/updategame" element={<UpdateGame onUpdateGame={onUpdateGame} onFetchGame={onFetchGame}
                    updatedGame={updatedGame} setUpdatedGame={setUpdatedGame}/>}></Route>
                <Route path="/something-fun" element={<Quiz/>}></Route>
        
                
            </Routes>
        </BrowserRouter>
    )

    
}