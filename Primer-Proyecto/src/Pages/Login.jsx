
import { useContext, useRef } from "react";
import { UserContext } from "../components/context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const inputText = useRef(null);
  const navigate = useNavigate();
  return (
    <main>
      <input type="text" ref={inputText} defaultValue={user} />
      <button onClick={() => {
          setUser(inputText.current.value);
          localStorage.setItem("user", inputText.current.value);
          navigate("/Gallery");
        }}>
        Login
      </button>
    </main>
  );
};

export default Login;
