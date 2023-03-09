import "./Home.css"
const Home = () => {
    return  (
    <main className="Home">
        <h2>UNIVERSO DC</h2>
        <article> <p>
        El Universo DC es el universo de ficción compartido en el que ocurren las historias de los cómics publicados por DC Comics, en el que todos los personajes de la editorial conviven entre sí. Esto ayuda a darle coherencia y sentido de la continuidad a las historias. Los personajes ficticios Superman, Batman, y la Mujer Maravilla son superhéroes famosos de este universo.
        </p></article>
        <div className="Basevideo">
        <video className="Video" 
autoPlay muted ><source src="https://res.cloudinary.com/dsvvktihq/video/upload/v1676762634/Mundo%20DC/SnapSave.io-Superh%C3%A9roes_de_DC-_1080p_rpz4uw.mp4" type="video/mp4"/> 
        </video>
        </div>
    </main>
    )
} 
export default Home;
