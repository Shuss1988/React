import { useState } from "react"


const Form = () => {
    const [ newMovie, setNewMovie ] = useState ( {
        title: "",
        year: "",
        poster: "",
    }   )


    const [error, setError] = useState(null)

    const CreateMovie = (ev) => {
        ev.preventDefault()
       if(!newMovie.title || !newMovie.poster || !newMovie.year) {
       setError("Formulario inclompleto");
        } else{
            setError(null);
            fetch("https://63f39a3cde3a0b242b45a80d.mockapi.io/movies", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newMovie),
            });
        }
    }

    return <form onSubmit={(ev)=> CreateMovie(ev)}>
            <input type="text" placeholder="Title"  onChange={(ev) =>
            setNewMovie({ ...newMovie, title: ev.target.value}) }/>

            <input type="Number" placeholder="Year" onChange={(ev) =>
            setNewMovie({ ...newMovie, year: ev.target.value}) }/>

            <input type="text" placeholder="Poster URL" onChange={(ev) =>
            setNewMovie({ ...newMovie, poster: ev.target.value}) } />
            <button type="submit" >Create Movie</button>
            {error && <h3>{error}</h3>}
        </form>
     
}

export default Form;