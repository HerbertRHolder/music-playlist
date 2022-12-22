(function () {
  "use strict";
  const prev = document.getElementById("prev");
  const play = document.getElementById("play");
  const playIcon = document.getElementById("play-icon")
  const next = document.getElementById("next");
  const pauseIcon = document.createElement("ion-icon");
  pauseIcon.setAttribute("name", "pause-sharp");
  const songs = [
    "Chasin" + " " + "Daisys",
    "Drifter",
    "Sofa" + " " + "Stories",
  ];
  //  Keep track of songs
  let songIndex = 2;
  let songArry = 2;


  function loadSong(song) {audio.src = `music/${song}.mp3`};
  // initially load song info DOM
  loadSong(songs[songIndex]);
  
  function playSong() {
    audio.play();
    play.removeEventListener("click");
    play.addEventListener("click", pauseSong);
    playIcon.remove();
    play.appendChild(pauseIcon);
  }
  function pauseSong() {
    audio.play();
    

  }
  function prevSong() {
    songIndex--;
    if(songIndex < 0)
    {songIndex = songs.length - 1;}
    loadSong(songs[songIndex])
    playSong()
}
function nextSong() {
    songIndex++;
    if(songIndex > songArry)
    {songIndex = 0;}
    loadSong(songs[songIndex]);
    playSong();
}

  play.addEventListener("click", playSong);
  pauseIcon.addEventListener("click",pauseSong);
  prev.addEventListener("click",prevSong);
  next.addEventListener("click",nextSong);
})();
