const Review = ({name, score})=>{
    console.log("Renderizando Review");
    return <div>
    <h2>el videoJuego {name}</h2>
    <h2>tiene como puntación {score}</h2>

    </div>
}
export default Review;