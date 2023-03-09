import { useContext, useRef } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import "./Login.css"
const Login = () => {
    const { user, setUser } = useContext(UserContext);
    const inputText = useRef(null);
    const navigate = useNavigate();
    return (
      <main className="MainPrincipal">
      <div className="Login">
        <h3>Usuario:</h3>
        <input className="input" type="text" ref={inputText} defaultValue={user} />
        <h3>contraseña:</h3>
        <input className="input" type="password" />
        <button
          onClick={() => {
            setUser(inputText.current.value);
            localStorage.setItem("user", inputText.current.value);
            navigate("/gallery");
          }}
        >
          Login
        </button>
        </div>
        </main>
    )
} 
export default Login;