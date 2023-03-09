import "./Volunteer.css"
const Volunteer = ({volunteer})=>{
    return <div className="volunteer">     
    <h2> Volunteer</h2>{volunteer.map((volunteer) =>{
    
        return ( 
            <div className="VoltunterMas" key={JSON.stringify(volunteer)}> 
            
           
            <p>{volunteer.name}</p>
            <p>{volunteer.where}</p>
            <p>{volunteer.description}</p> </div>
       
        )
    })}

    </div>
}
export default Volunteer;