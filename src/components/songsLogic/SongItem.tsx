import './styles/SongItem.css'
import {useState} from "react";

export const SongItem = ({Song, playNow}) => {
    const [, setLiked] = useState(false)
    console.log(Song)
    const fontWeight = playNow === Song.id ? 'bold' : 'normal'
    const clickHandler = () => {
        setLiked(true);
    }

    return (
        <tr className="song" style={{fontWeight}}>
            <td className='title'>{Song.title}</td>
            <td className="artist">{Song.artist}</td>
            <td className="album">{Song.album}</td>
            <td className="duration">{Song.duration}</td>
            <td className="link">{Song.link}</td>
            <td>
                <button className="liked" onClick={clickHandler}>like</button>
            </td>
        </tr>

    )
}
