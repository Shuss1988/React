
//{2da OPCION cuando hay varios stados}

import { useState } from "react"

const Form2 = () => {
    //tenemos estado inicial del formulario con las claves vacias
    const [user, setUser] = useState ({
    username: "",
    password: "",
})
    //luego tenemos un estado para controlar el error
    const [error, setError] = useState(null)

    // creamos una función  que se ejeciutará en el onsubmit del formulario.
    const handleSubmit =(ev) =>

    //prevenimos el compartamiento por defecto del submit ( que es recargar la pagina)
    {ev.preventDefault();

    // si no tienes password o username seteamos el error con un string
        if(!user.password || !user.username) {

            setError("formulario Incompleto")
    // y si lo tienes sacamos el usuario por consola y seteamos el error a nulo
        }else {
            setError(null)
            console.log(user);
        }
    }
    return <div>
        <h1>formulario 2</h1>
        <form onSubmit={(ev) => handleSubmit(ev)}>
            <input type="text" 
            placeholder="userName" 
            value={user.username} 
            onChange={(ev) => setUser({... user, username: ev.target.value})}/>

            <input type="text" 
            placeholder="password" 
            value={user.password} 
            onChange={(ev) => setUser({... user, password: ev.target.value})}/>

            <button type="submit">submit</button>
        </form>
        {error !== null && <h2>{error}</h2>}
    </div>
}
export default Form2;
