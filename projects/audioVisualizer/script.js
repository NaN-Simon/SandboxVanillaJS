let body, audio, context, analyser, src, num, array, width, logo, myElements, height 

body = document.querySelector('body');
audio = document.getElementById('audio')

num = 64;
array = new Uint8Array(num * 3);
width = 10;

window.onclick = function(){
  audio.play();

  for (let i = 0; i < num; i++) {
    logo = document.createElement('div');
    logo.className = 'logo';
    logo.style.background = 'red';
    logo.style.minWidth = width + 'px';
    body.appendChild(logo);
  }

  myElements = document.getElementsByClassName('logo')
  context = new AudioContext();
  analyser = context.createAnalyser();
  src = context.createMediaElementSource(audio);
  src.connect(analyser);
  analyser.connect(context.destination);
  loop()
}

function loop(){
  window.requestAnimationFrame(loop);
  analyser.getByteFrequencyData(array);
  console.log(array)
  for(let i = 0; i < num; i++){
    height = array[i+num];
    myElements[i].style.minHeight = height+'px';
    myElements[i].style.opacity = 0.008 * height;
  }
}



