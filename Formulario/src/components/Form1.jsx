//1ra OPCION cuando hay pocos estados.
 import { useState } from "react"

const Form1 = () => {
    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")
    const [user, setUser] = useState ({
    username: "",
    password: "",
})
     const handleSubmit =(ev) =>{ev.preventDefault();

        if(!password || !username) {
            console.error("Foratio incompleto");
        }else {
            const user = {
                username,
                password,
            }
            console.log(user);
        }
    }
    return <div>
            <h1>formulario 1</h1>

        <form onSubmit={(ev) => handleSubmit(ev)}>
            <input type="text" placeholder="userName" value={username} onChange={(ev) => setUsername(ev.target.value) }/>
            <input type="text" placeholder="password" value={password} onChange={(ev) => setPassword(ev.target.value) }/>
            <button type="submit">submit</button>
        </form>
    </div> 
    } 
    export default Form1;