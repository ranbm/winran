export function song(name,artist,album,duration){
    this.name=name;
    this.artist=artist;
    this.album=album;
    this.duration=duration;
}
const url='https://api.deezer.com/version/service/id/method/?q=eminem';
var response= await fetch(url);
var data= await response.json();

