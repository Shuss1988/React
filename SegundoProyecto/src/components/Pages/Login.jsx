import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext/User.Context";
import "./Login.css"

const Login = () =>{
const { user, setUser} = useContext (UserContext);
const inputText = useRef (null);
const navigate = useNavigate();    

return (
    <main className="Main">
<div className="card">
<span class="card__title">Subscribe</span>
    <p class="card__content">¡¡¡transformen este cuerpo decadente en Mumm Ra, el inmortal!!!</p>
    <div class="card__form">
    <input className="Logueate" type="text" ref={inputText} placeholder="Logueate" defaultValue={user}  />
    <button className="sign-up" onClick={()=>{
        setUser(inputText.current.value);
    localStorage.setItem("user", inputText.current.value);
    if(inputText.current.value){
    navigate("/")
    }else{
        alert("logueate coño!")
    }
    
    }}> Login</button>
    </div>
</div>
    </main>
);
}
export default Login;