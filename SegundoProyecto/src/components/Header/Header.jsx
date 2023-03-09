import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext/User.Context";
import "./Header.css"
const Header = ()=>{
    const {user, logout}= useContext(UserContext);
    return  (
    <header>


    <div className="Header-Logout">
        {user !== null && <button onClick={() => logout()}>Logout</button>  }
        
    </div>
    <img  src="https://res.cloudinary.com/dsvvktihq/image/upload/v1677018312/im%C3%A1genes%20de%20los%20Thundercats/log_vdnozr.png" alt="logo" />
    
    <nav>
        <ul>
            <li>
            {user === null &&
                <NavLink to="/Login">Login</NavLink>}
            </li>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Gallery">Gallery</NavLink>
            </li>
        </ul> 
    </nav>
    </header>
    )
}
export default Header;