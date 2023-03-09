import "./About.css"
const AboutMe = ({hero})=>{
  return (<div>  <h2 className="About"> About me </h2>
 <div className="AboutMe"> 

  
{hero.map((i)=>{
    return (<div key={JSON.stringify(i)}>
   
    <p> {i.info}</p>
    </div>)
    
  })
  }
</div>
  </div>
  )
}
export default AboutMe;