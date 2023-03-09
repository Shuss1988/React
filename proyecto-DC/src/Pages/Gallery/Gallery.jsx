import { useState, useEffect } from "react";

import "./Gallery.css"

const Gallery = ()=>{ 
    const [character, setCharacter] = useState ([]);
    const [search, setSearch] = useState("")

    const getCharacter = async () =>{
        const res = await fetch ("https://63ecd81431ef61473b2a639e.mockapi.io/DC")
        const data = await res.json();
        setCharacter(data)
    }
    const filterSearch = (ev)=>{
      setSearch(ev.target.value)
    }
    const filterCharacter = !search ? character : character.filter((data)=> data.name.toLowerCase().includes(search.toLocaleLowerCase()));

    useEffect(() => {
    getCharacter();
    }, []);

    return (
    <main className="GalleryBase"> 
    
            <h2>PERSONAJES DE DC</h2>
            <input className="inputGallery" value={search} type="text" onChange={filterSearch} placeholder="search" />

        <article> <p>  «La locura es la salida de emergencia. Usted puede simplemente salir y cerrar la puerta a todas esas cosas terribles que ocurrieron. Puede guardarlos bajo llave... para siempre.»
        
        ―El Joker 
        </p></article>
    <div className="Gallery">
        {filterCharacter.map((item) => 
        <figure className="card" key={item.id}><img src={item.image} alt={item.name} /><h3>{item.name}</h3></figure>
        )}
    </div>
    </main>
)
}
export default Gallery;