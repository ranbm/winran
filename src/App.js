import './App.css';
import React, {useState, useEffect} from "react";
import ReactDOM, {render} from "react-dom/client";
import SongItem from "./components/songsLogic/SongItem";
import Card from "./components/card/Card";
import NewSearch from "./components/newSearch/NewSearch"
import Songlist from "./components/songsLogic/Songlist";
import Player from "./components/player/Player";
const DUMMY_SONGS = [
        {id: 0, title: 'song 2', artist: 'blur', album: 'best of', duration: '2:22', link:'#', like:false, playNow:false},
        {id: 1, title: 'crying in the rain', artist: 'avi bitter', album: 'best of', duration: '3:22', link:'#', like:false, playNow:false},
        {id: 2, title: 'white screen', artist: 'white screen', album: 'test', duration: '5:21', link:'#', like:false, playNow:false}
    ];
function App() {
    const [songs,setSongs] = useState(DUMMY_SONGS);
    const addSongsHandler = (song) =>{
        setSongs((prevSongs)=>{
            return [song, ...prevSongs]
        });
    };
    return (
        <div>

            <NewSearch/>
            <Player/>
            <p>show this</p>
            <Songlist songs={songs} songsHandler={setSongs}/>
        </div>

    )
};
export default App;
