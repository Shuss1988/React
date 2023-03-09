import { memo } from "react";

const VideoGame = memo(({ name, cover })=>{
    console.log( "Renderizando VideoGame");
    return <div>
            <h2>{name}</h2>
            <img src={cover} alt={name} />
            </div>
    
})
export default VideoGame;