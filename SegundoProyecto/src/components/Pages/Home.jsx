import "./Home.css"
const Home =()=>{
return <main className="home">

<h1>THUNDERCATS</h1>
<p>ThunderCats: Los felinos cósmicos sigue las aventuras del equipo de héroes los ThunderCats, que es un grupo de felinos humanoides extraterrestres, muy avanzados tecnológicamente pero involucran al misticismo y a fuerzas sobrenaturales, llegando a vivir en un planeta azul que ellos llamaron Tercer Planeta. </p>
<div className="video">
<video className="Video" 
autoPlay muted ><source src="https://res.cloudinary.com/dsvvktihq/video/upload/v1676648637/im%C3%A1genes%20de%20los%20Thundercats/SnapSave.io-Thundercats_opening_HD_pch439.mp4" type="video/mp4"/></video>
</div>
</main>
}
export default Home;