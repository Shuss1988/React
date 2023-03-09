import "../More/Habilities.css"
const Habilities = ( {habilities})=>{
return (<div>
        <h2> Habilities </h2>
    <div className="Habilities">
    
    {habilities.map((habilitie) => {
        return <div key={JSON.stringify(habilitie)}>
     
        <ul>
            <li>{habilitie}</li>
        </ul>
            
        </div> })
    }</div>
</div>)

}
export default Habilities;