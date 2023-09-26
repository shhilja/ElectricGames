
import NavBar from "./NavBar";


const Home = () =>{
    return(
        <>
        <NavBar/>
        <div>
        <div className="d-flex justify-content-center shadow p-3 mb-5 rounded">
            <h1 className="header-texts mt-5">Welcome to ElectricGames</h1>
        </div>
        <div  className="container text-center ">
            <p className="home-txt-body">
                Here at electric games you can browse different games, and check their information.
                You can also delete, update or add new games to our system!
            </p>
            <p className="home-txt-body">Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                 esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
  
        </>

    )
}

export default Home;