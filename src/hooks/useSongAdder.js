import React from "react";
function getSong(search_val) {
    const url = 'https://api.deezer.com/search?q=';
    fetch(url + search_val, {
        method: 'GET',
        mode: 'no-cors'
    })
        .then(Response => Response.json())
        .then(Response => {
            Response = Response['data'];
            for (let i = 0; i < Response.length; i++) {
                Response[i].album = Response[i].album.title;
                Response[i].artist = Response[i].artist.name;
            }
            const data = Response;
        })
        .catch(error => console.log(error));
}

