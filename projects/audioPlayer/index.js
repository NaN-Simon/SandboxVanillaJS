
const supPlayer = document.querySelector(".sub-player");
const audio = document.querySelector(".audio");
const playPauseBtn = document.querySelector(".play-pause");
const PlayPauseImgSrc = document.querySelector(".play-pause-img__src");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const songTitle = document.querySelector(".song-title");
const coverPng = document.querySelector(".cover-png");
const durationTime = document.querySelector(".duration-time");
const currentTime = document.querySelector(".current-time");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const progressDot = document.querySelector('.progress-dot')
const background = document.querySelector(".background");


const songs = [
"S3RL feat Mixie Moon - Music is my saviour", 
"You Are Mine - S3RL ft Kayliana",
"S3RL –  MTC",
"S3RL - PikaGirl",
];
let songIndex = 0;

function loadSong(song) {
  songTitle.innerHTML = song;
  audio.src = `./assets/music/${song}.mp3`;
  if(songIndex<2){
    coverPng.src = `./assets/images/cover${songIndex}.png`;
  background.src = `./assets/images/cover${songIndex}.png`;
  } else {
    coverPng.src = './assets/images/cover-deafult.png'
    background.src = './assets/images/cover-deafult.png'
  }
  
}
loadSong(songs[songIndex]);

//play
audio.volume = '0.1'
function playSong() {
  supPlayer.classList.add(".play");
  audio.play();
  PlayPauseImgSrc.src = "./assets/icons/pause.png";
  document.querySelector('.cover-png').classList.add('scale')
  progressDot.style.opacity = '1'
}
function pauseSong() {
  supPlayer.classList.remove(".play");
  audio.pause();
  PlayPauseImgSrc.src = "./assets/icons/play.png";
  document.querySelector('.cover-png').classList.remove('scale')
  progressDot.style.opacity = '0'
}
playPauseBtn.addEventListener("click", () => {
  const isPlay = supPlayer.classList.contains(".play");
  if (isPlay) {
    
    pauseSong();
  } else {
    
    playSong();
  }
});

//next
next.addEventListener("click", nextSong);
function nextSong(){
  if (songIndex + 1 == songs.length) {
    songIndex = 0;
  } else {
    songIndex ++;
  }
  loadSong(songs[songIndex]);
  playSong();
}

//prev
prev.addEventListener("click", prevSong);
function prevSong(){
  if (songIndex == 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex --;
  }
  loadSong(songs[songIndex]);
  playSong();
}
//progress bar
function updateProgress(e){
  const {duration,currentTime} = e.srcElement
  const progressProcent = (currentTime/duration)*100
  progress.style.width = `${progressProcent}%`
  progressDot.style.left = `${progressProcent}%`
}
audio.addEventListener('timeupdate',updateProgress)

//timer duration
function showTime(time){
  let result = ""
  time = Math.floor(time)
  let hours = (Math.floor(time/60/60))
  let minutes = (Math.floor(time/60)-(hours*60))
  let seconds = (time % 60)
  let timeResult = hours+":"+minutes+":"+seconds
  if (hours != 0){result += hours+":"}
  if (minutes != 0){result += minutes.toString().padStart(2,'0')+":"} else {result += "00:"}
  if (seconds != 0){result += seconds.toString().padStart(2,'0')} else {result += "00"}
  return result
  }
  audio.addEventListener('loadeddata',()=>{
    durationTime.innerHTML = showTime(audio.duration)
  })
//timer currentTime
setInterval(()=>{
  currentTime.textContent = showTime(audio.currentTime);
},500);

//set Progress
function setProgress(e){
  const width = this.clientWidth
  const clickWidthX = e.offsetX
  const widthProcent = (clickWidthX/width)
  audio.currentTime = (clickWidthX / width)* audio.duration
}
progressBar.addEventListener('click',setProgress)

//autoPlay
audio.addEventListener('ended',nextSong)

//volume
volumeLine = document.querySelector('.volume-line')
volumeMean = document.querySelector('.volume-mean')
function setVolume(e){
  const width = this.clientWidth
  const clickWidthX = e.offsetX
  const widthProcent = (clickWidthX/width)
  audio.volume = (clickWidthX / width)
  volumeMean.style.width = `${(clickWidthX/width)*100}%`
}
volumeLine.addEventListener('click',setVolume)