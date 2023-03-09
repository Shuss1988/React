import "./Experience.css"
const Experience = ({experience})=>{
    return <div className="Experience">     <h2> Experience</h2>
        <div className="ExperienceLaboral"> {experience.map((i) => { 
            return (
                <div key={JSON.stringify(i)}>
                <h3 className="name">  {i.name}</h3>
                <p>{i.date}</p>
                <p>{i.where}</p>
                <p>{i.description}</p>

                </div>
            )
        })}

        </div>
    </div>
}
export default Experience;