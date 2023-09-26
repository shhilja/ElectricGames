import NavBar from "./NavBar"
import { Search } from "react-bootstrap-icons"
const SearchBar = ({games, setSearchResults}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleSearchChange = (e) => {
        if(!e.target.value) {
            return setSearchResults(games)
        }

        const resultsArray = games.filter(games => games.Title.toLowerCase().includes(e.target.value.toLowerCase()) || games.Id.includes(e.target.value))
        setSearchResults(resultsArray)
    }

    return(
        <>
        <NavBar />
        <div className="container my-5">
          
                <form onSubmit={handleSubmit} className="row justify-content-md-center search-form-row">
                    <div className="gx-4 col-10 col-md-6 col-lg-7">
                    <input type="text" 
                    className=" form-control darkmode-input"
                    placeholder="search for title or id" onChange={handleSearchChange}></input>
                    </div>

                    <div className="col-1 col-md-1 gx-0 text-center">
                    <button id="search-btn"><Search size={30}/></button>
                    </div>
              
                  

                </form>
     

        </div>
 
        </>
    )
}
export default SearchBar