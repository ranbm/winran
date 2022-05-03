import SearchForm from "./SearchForm";

const NewSearch = () => {
    return (
        <div>
            <SearchForm/>
        </div>
    )
};
export default NewSearch;
// export function song(name,artist,album,duration){
//     this.name=name;
//     this.artist=artist;
//     this.album=album;
//     this.duration=duration;
// }
// const url='https://api.deezer.com/version/service/id/method/?q=eminem';
// var response= await fetch(url);
// var data= await response.json();
//
// import React from "react";
// function getSong(search_val) {
//     const url = 'https://api.deezer.com/search?q=';
//     fetch(url + search_val, {
//         method: 'GET',
//         mode: 'no-cors'
//     })
//         .then(Response => Response.json())
//         .then(Response => {
//             Response = Response['data'];
//             for (let i = 0; i < Response.length; i++) {
//                 Response[i].album = Response[i].album.title;
//                 Response[i].artist = Response[i].artist.name;
//             }
//             const data = Response;
//         })
//         .catch(error => console.log(error));
// }
//
