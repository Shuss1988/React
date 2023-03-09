import { useState } from "react";
import './App.css'
import Hero from './components/Hero/Hero';
import About from "./components/About/About"
 import Experience from "./components/Experience/Experience"
 import Education from "./components/Education/Education"
import More from "./components/More/More"
import { CV } from "./CV/CV.js"
import Habilities from "./components/More/Habilities";
import Volunteer from "./components/More/Volunteer"

const { hero, education, experience, languages, habilities, volunteer } = CV;
const App = () =>{
  const [showEducation, setShowEducation] = useState(true);

  return (
   <div className="App">
        <Hero hero={hero} />
         <About hero={hero.aboutMe} /> 

        <div className="Btn">
        <button className="custom-btn"
              onClick={() => setShowEducation(true)}>Education
        </button>
       
       <button className="custom-btn"
              onClick={() => setShowEducation(false)}>Experience
       </button>
        </div>
    
      
       <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
           <Experience experience={experience} /> 
        )}
      </div>
	      <More languages={languages} />
        <Habilities habilities={habilities}/> 
        <Volunteer volunteer={volunteer} />
        

        
    </div>
    
      
  )
}

export default App
