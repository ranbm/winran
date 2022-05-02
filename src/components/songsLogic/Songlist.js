import SongItem from "./SongItem";
import {useState} from "react";
import SongFilter from "./SongFilter";
import './Songlist.css'


const Songlist = (props, handler) => {
    const [rerender, setRerender] = useState(false);
    const [filteredArtist, setFilteredArtist] = useState('')

    const filterChangeHandler = (selectedArtist) => {
        setFilteredArtist(selectedArtist);
    };

    const ChangePlayingNow = (id) =>{

        props.songs.map((song) => song.id === id ? song.playNow=true: song.playNow=false)
        setRerender(!rerender)

    }


    const filteredSongList = props.songs.filter(song => {
        return song.artist === filteredArtist;
    });

    var songsContent;
    if (filteredSongList.length > 0) {
        songsContent = filteredSongList.map((song) =>
            <li key={song.id} className='insonglist' onDoubleClick={() => ChangePlayingNow(song.id)}>
            <SongItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
            link={song.link}
            like={song.like}
            playNow={song.playNow}

        />
        </li>)
    } else {
        songsContent = props.songs.map((song) => <li key={song.id} className='insonglist' onDoubleClick={() => ChangePlayingNow(song.id)} ><SongItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
            link={song.link}
            like={song.like}
            playNow={song.playNow}

        /></li>)
    }
    return (
        <ul className="songList">
            <SongFilter
                selected={filteredArtist}
                onChangeFilter={filterChangeHandler}
            />

            {songsContent}

        </ul>
    );
}
export default Songlist;