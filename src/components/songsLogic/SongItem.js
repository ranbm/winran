import './SongItem.css'
import {useEffect, useState} from "react";
import Card from "../card/Card";

const SongItem = (song) => {
    const [liked,setLiked] = useState(song.like)
    const fontWeight = song.playNow ? 'bold' : 'normal'
    const clickHandler = () =>{
        console.log(liked);
        console.log('1111');
        setLiked(true);
        console.log(liked);
    }

    return (
        <div className="song" style={{fontWeight}}>
            <div className='title'>{song.title}</div>
            <div className="artist">{song.artist}</div>
            <div className="album">{song.album}</div>
            <div className="duration">{song.duration}</div>
            <div className="link">{song.link}</div>
            <button className="liked" onClick={clickHandler}>like</button>
        </div>

    )
}

export default SongItem;