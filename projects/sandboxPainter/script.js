const canv = document.getElementById('canvas')
ctx = canv.getContext('2d')
const mainColor = 'black'
const radius = 3
canv.width = window.innerWidth;
canv.height = window.innerHeight;

ctx.fillStyle = mainColor;
ctx.strokeStyle = mainColor;
ctx.lineWidth = radius * 2;
var coords = [];

function save() {
  localStorage.setItem('coords', JSON.stringify(coords))
}

function clear() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.beginPath();
  ctx.fillStyle = mainColor;
}

function replay() {
  var timer = setInterval(function () {
    if (!coords.length) {
      clearInterval(timer);
      ctx.beginPath();
      return;
    }
    console.log('activated',coords[0],coords[1])
    var e = {
      clientX: coords.shift(),
      clientY: coords.shift()
    };
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, radius, 0, 2 * Math.PI);
    ctx.fill();
  
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);

  }, 10)
}
var isMouseDown = false;
canv.addEventListener('mousedown', function () {
  isMouseDown = true;
  ctx.beginPath();
})
canv.addEventListener('mouseup', function () {
  isMouseDown = false;
  coords.push('no')
  coords.push('no')
})
canv.addEventListener('mousemove', function (e) {
  if (isMouseDown) {
    coords.push(e.clientX, e.clientY)

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
})

document.addEventListener('keydown', function (e) {
  //s
  if (e.keyCode === 83) {
    console.log('saved');
    save();
    console.log(coords.length);
  }
  //r
  if (e.keyCode === 82) {
    console.log('replying...')
    coords = JSON.parse(localStorage.getItem('coords'));
    clear();
    replay();
  };
  //c
  if (e.keyCode === 67) {
    console.log('cleared');
    clear();
  }
})