
import { useState } from 'react'
import './App.css'
import Review from './components/Review'
import VideoGame from './components/Videogame'


function App() {
 const [score, setScore ] = useState(0);
  return (
    <div className="App">
     <VideoGame name="CrashCar" cover="https://www.crashbandicoot.com/content/dam/atvi/Crash/crash-touchui/ctr/home/ctr-full-logo.png"/> 
     <Review  name="CrashCar" score={score}/>
     <input type="number" value={score} onChange={(ev)=> setScore(ev.target.value)

     }/>
    </div>
  )
}

export default App
