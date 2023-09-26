import { NavLink } from "react-router-dom";
import gameLogo from './gameLogo4.png'
import { HouseDoor, Joystick, PlusSlashMinus, PencilSquare, Dice6 } from 'react-bootstrap-icons';
const NavBar = () => {

    let activeClassName = "text-secondary nav-link";
    let inactiveClassName = "nav-link text-white"


    return(
        <>
        <header className="px-3 py-2 text-bg-dark">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                        <img src={gameLogo} id="game-logo" className="bi me-2" alt=""></img>
                        <span className="fs-4">ElectricGames</span>
                    </NavLink>
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                             isActive ? activeClassName : inactiveClassName}>
                                <HouseDoor className="bi d-block mx-auto mb-1 navbar-icons" />
                                 Home 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/games" className={({ isActive }) =>
                             isActive ? activeClassName : inactiveClassName}>
                                <Joystick className="bi d-block mx-auto mb-1 navbar-icons" />
                                 Games
                            </NavLink>
                        
                        </li>
                        <li>
                            <NavLink to="/add-delete" className={({ isActive }) =>
                             isActive ? activeClassName : inactiveClassName}>
                                <PlusSlashMinus className="bi d-block mx-auto mb-1 navbar-icons" />
                                 Add or Delete
                            </NavLink>
                         </li>
                        <li>
                            <NavLink to="/updategame" className={({ isActive }) =>
                             isActive ? activeClassName : inactiveClassName}>
                                <PencilSquare className="bi d-block mx-auto mb-1 navbar-icons" />
                                 Update
                            </NavLink>
                            
                        </li>
                        <li>
                            <NavLink to="/something-fun" className={({ isActive }) =>
                             isActive ? activeClassName : inactiveClassName}>
                                <Dice6 className="bi d-block mx-auto mb-1 navbar-icons" />
                                 Something fun
                            </NavLink>

                        </li>
                    </ul>

                </div>

            </div>
        </header>

        </>
    )
}

export default NavBar;