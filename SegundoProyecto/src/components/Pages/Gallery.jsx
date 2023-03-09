import { useState, useEffect} from "react";
import "./Gallery.css"
const Gallery = ()=>{

        const [character, setCharacter] = useState ([]);
        const [search, setSearch] = useState("")

        const getCharacter = async () =>{
        const res = await fetch ("https://63ecd81431ef61473b2a639e.mockapi.io/ThunderCats")
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
        
    <main className="gallery">
        <input value={search} onChange={filterSearch} type="text" placeholder="search" className="input" />
        <div className="mapeo">
          {filterCharacter.map((character) =>
        <figure key={character.name} >
            <img src={character.imagen} alt={character.name} />
            <h2>{character.name.toUpperCase()}</h2>
        </figure>
        
        )}
        </div>
    </main>
    )
}
export default Gallery;