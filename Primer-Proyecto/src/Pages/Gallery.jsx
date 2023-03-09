import { useContext } from "react";
import { UserContext } from "../components/context/userContext";
import axios from "axios";
import React, { useState, useEffect } from "react";


const Gallery= ()=>{
const { user } = useContext(UserContext);
const [character, setCharacter] = useState([]);

const getCharacter = async ()=>{
const res = await axios.get(`https://rickandmortyapi.com/api/character/`);
const data = await res.data.results;

  setCharacter(data);
}
console.log(character)
useEffect(() => {
  getCharacter();
}, [])
    
  return (
    <main>
    <h1>Personajes</h1>
      <div className="mapeo">
   
        {character.map((character) => 
        <figure key={character.id} >
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
        </figure>)}
      </div>
    </main>
  );
}
export default Gallery;