import { useEffect, useState } from 'react';

const Main = () => {
const [movies, setMovies] = useState([])
const [loaded, setLoaded] = useState(false)

const getMovies =  async () => {
  const res = await fetch( "https://63f39a3cde3a0b242b45a80d.mockapi.io/movies");
  const data = await res.json();
  setMovies(data)
  setLoaded(true)
}
useEffect(() => {
  getMovies()

}, [])

  return (
    <div className="App">
     {loaded ? movies.map((movie) => 
     <div className='movieCard' key={movie.id}>
      <h3>{movie.title}</h3>
      <h3>{movie.year}</h3>
      <img src={movie.poster} alt={movie.title} />
     </div>) : <h2>Loading...</h2>}
    </div>
  )
}

export default Main
