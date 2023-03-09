import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";
import "./Header.css"


const Header = ()=>{
    const {user, logout} = useContext(UserContext);
    return (
    <header className="Header">
     <div className="divHeader">
    {user !== null && <button onClick={() => logout()}>logout</button>}
    {user !== null ? <h2>Welcome {user}</h2> : <h2>Logueate</h2>} 
    </div>
    <nav> 
        <li>
            {user == null && <NavLink to="/Login">Login</NavLink>}
        </li>
    
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
      
        <li>
            <NavLink to="/Gallery">Gallery</NavLink>
        </li>   
    </nav>
   
  
    </header>
    )
}
export default Header;