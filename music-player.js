// data
const music_list = [
  {
    img: "https://i.ytimg.com/vi/MJmxdlCtFWU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgBwsqLjtQ3kwEBFdAQk1BA1Z6cw",
    name: "Two Two Two",
    film: "Kaathuvaakula Rendu Kaadhal",
    artist: "Anirudh",
    music: "music/Two Two Two.mp3",
  },
  {
    img: "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2021/10/jugnu-lyrics-badshah.jpg",
    name: "Jugnu",
    film: "Badshah",
    artist: "Nikhita Gandhi | Akanksha Sharma",
    music: "music/Jugnu.mp3",
  },
  {
    img: "https://i.ytimg.com/vi/WgrLE4Fqxeo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChxO0w-PnVS3BHxzppCEkDJLYItw",
    name: "Bullet",
    film: "The Warrior",
    artist: "DSP",
    music: "music/Bullet.mp3",
  },
  {
    img: "https://i.ytimg.com/vi/Y3-PeuQ7nvY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0X9wJRcr-CnZsdyity_untFPoF",
    name: "Yanji",
    film: "Vikram Vedha",
    artist: "Sam C.S",
    music: "music/Yanji.mp3",
  },
];

// helpers

const zeroPad = (num) => String(num).padStart(2, "0");

function secondsToMinutes(time) {
  return zeroPad(Math.floor(time / 60)) + ":" + zeroPad(Math.floor(time % 60));
}

// Complete the below functions
function loadTrack() {}

function repeatTrack() {}

function randomTrack() {}

function nextTrack() {}

function prevTrack() {}

function playTrack() {}

function playpauseTrack() {}

function pauseTrack() {}

function seekTo() {}
