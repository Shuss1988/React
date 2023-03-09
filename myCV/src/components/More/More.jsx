import "./More.css"
const More = ({languages}) =>{
    
    return <div className="More">
    <h2> More</h2>
    <div className="SubMore">
    <p>{languages.language}</p>
    <p>{languages.wrlevel}</p>
    </div>

 
    </div>

}
export default More;