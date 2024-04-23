let analyser, myElements

const audioVisualizer = document.querySelector('.audio-visualizer');
const audio = document.getElementById('audio')

const num = 64;
const array = new Uint8Array(num * 3);
const width = 10;

window.onclick = function(){
  audio.play();

  for (let i = 0; i < num; i++) {
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.style.background = 'red';
    logo.style.margin = '2px';
    logo.style.borderRadius = '30px';
    logo.style.minWidth = width + 'px';
    audioVisualizer.appendChild(logo);
  }

  myElements = document.getElementsByClassName('logo')
  const context = new AudioContext();
  analyser = context.createAnalyser();
  const src = context.createMediaElementSource(audio);
  src.connect(analyser);
  analyser.connect(context.destination);
  loop()
}

function loop(){
  window.requestAnimationFrame(loop);
  analyser.getByteFrequencyData(array);
  // console.log(array)
  for(let i = 0; i < num; i++){
    const height = array[i+num];
    myElements[i].style.minHeight = height+'px';
    myElements[i].style.opacity = 0.008 * height;
  }
}



