let analyser, myElements, context

const audioVisualizer = document.querySelector('.audio-visualizer');

const num = 64;
const array = new Uint8Array(num * 3);
const width = 10;
const heightK = 1.5;



const supPlayer = document.querySelector("#sub-player");
const audio = document.querySelector("#audio");
const playPauseBtn = document.querySelector("#play-pause-btn");
const PlayPauseImgSrc = document.querySelector("#play-pause-img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const songName = document.querySelector("#song-name");
const thumbnail = document.querySelector("#thumbnail");
const durationTime = document.querySelector("#duration-time");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const progress = document.querySelector("#progress");
const progressDot = document.querySelector('#progress-dot')
const background = document.querySelector(".background");


function startVisualize() {
  context = new AudioContext();
  analyser = context.createAnalyser();
  const src = context.createMediaElementSource(audio);
  src.connect(analyser);
  analyser.connect(context.destination);
  for (let i = 0; i < num; i++) {
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.style.background = '#5d6597';
    logo.style.margin = '2px';
    logo.style.borderRadius = '30px';
    logo.style.minWidth = width + 'px';
    audioVisualizer.appendChild(logo);
  }

  myElements = document.getElementsByClassName('logo')

  loop()
}

const songs = [
"You Are Mine - S3RL ft Kayliana",
"LIELESS x SCRUBNOOB",
"Tiefundton PERFECT DAY",
"SRB - Blurry Murry",
"TEKKISLOVE Chr1St3Kk - Wildberry LILLET",
"Madonna - Frozen (Sickick Remix)",
];
let songIndex = 0;

function loadSong(song) {
  songName.innerHTML = song;
  audio.src = `./assets/music/${song}.mp3`;
  if(songIndex <= 5){
    thumbnail.src = `./assets/images/cover${songIndex}.jpg`;
  background.src = `./assets/images/cover${songIndex}.jpg`;
  } else {
    thumbnail.src = './assets/images/cover-deafult.jpg'
    background.src = './assets/images/cover-deafult.jpg'
  }
}
loadSong(songs[songIndex]);

//play
audio.volume = '0.1'
playPauseBtn.addEventListener("click", () => {
  const isPlay = supPlayer.classList.contains(".play");
  if (isPlay) {
    !context && startVisualize();
    pauseSong();
  } else {
    !context && startVisualize();
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
  !context && startVisualize();
  playSong();
}

function playSong() {
  supPlayer.classList.add(".play");
  audio.play();
  PlayPauseImgSrc.src = "./assets/svg/pause-circle-svgrepo-com.svg";
  document.querySelector('.cover-png').classList.add('scale')
  progressDot.style.opacity = '1'
}
function pauseSong() {
  supPlayer.classList.remove(".play");
  audio.pause();
  PlayPauseImgSrc.src = "./assets/svg/play-circle-svgrepo-com.svg";
  document.querySelector('.cover-png').classList.remove('scale')
  progressDot.style.opacity = '0'
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
  !context && startVisualize();
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
volumeLine = document.querySelector('#volume')
volumeMean = document.querySelector('#volume-mean')
function setVolume(e){
  const width = this.clientWidth
  const clickWidthX = e.offsetX
  const widthProcent = (clickWidthX/width)
  audio.volume = (clickWidthX / width)
  volumeMean.style.width = `${(clickWidthX/width)*100}%`
}
volumeLine.addEventListener('click',setVolume)


function loop(){
  window.requestAnimationFrame(loop);
  analyser.getByteFrequencyData(array);
  // console.log(array)
  for(let i = 0; i < num; i++){
    const height = array[i+num];
    myElements[i].style.minHeight = height * heightK +'px';
    myElements[i].style.opacity = 0.008 * height;
  }
}