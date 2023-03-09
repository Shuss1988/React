import { NavLink } from "react-router-dom";

NavLink
const Nav =()=>{
    return  <nav>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/Listado">Listado</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
  </nav>
}
export default Nav;