import "./Header.css"
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

const Header = ()=>{
    const { user, logout } = useContext(UserContext)
    return (
        <header>
        <div className="LogoutHeader">
        {user !== null ? <h2>Welcome {user}</h2> : <h2>Logueate</h2>} 
            {user && <button onClick={() => logout()}>Logout</button>}
      
        </div>
        <img src="https://res.cloudinary.com/dsvvktihq/image/upload/v1676771763/Mundo%20DC/dc_pu4zx7.jpg" alt="logo DC" />
        <nav className="UniversoDc">
    
            <ul>
                
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                {user === null &&  <NavLink to="/Login">Login</NavLink> } 
                </li>
                <li>
                  {user && <NavLink to="/Gallery">Gallery</NavLink>}
                </li>
                <li>
                  {user && <NavLink to="/About">About</NavLink>}
                </li>

            </ul>
        </nav>
        <nav className="hamburguesa">
        <ul>
        <li class="dropdown">DC
                    <a href="#"></a>
                 <ul class="dropdown-menu">
                <li> <a href="/Gallery"> gallery</a></li>
                <li><a href="/about">about</a></li>
                <li><a href="/">home</a></li>
                </ul>
                </li>
        </ul>
        </nav>
        </header>
    )
}
export default Header;