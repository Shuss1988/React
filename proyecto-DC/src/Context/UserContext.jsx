import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState (()=>{
        if(localStorage.getItem("user")){
            return localStorage.getItem("user")
        } else {
            return null;
        }
    });

    const navigate = useNavigate()

    const login = (data) => {
        setUser(data);
        navigate("/Gallery")
    }
    const logout = () => {
        setUser(null)
        navigate("/Login")
    }
    return (
    <UserContext.Provider value ={{ user, setUser, login, logout}}>
       {children} 
    </UserContext.Provider>
    );
};

