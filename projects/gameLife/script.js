const canvas = document.getElementById('c1');
console.log(canvas.clientWidth);
const ctx = canvas.getContext('2d');
let mas = []
let count = 0;
let timer;
const pxSize = 5
const wSize = canvas.clientWidth / pxSize
const hSize = canvas.clientHeight / pxSize
canvas.onclick = function (event) {
  let xOffset = event.offsetX
  let yOffset = event.offsetY
  let x = Math.floor(xOffset / pxSize)
  let y = Math.floor(yOffset / pxSize)
  console.log(x, y);
  mas[y][x] = 1
  console.log(mas);
  drawField()
}

function goLife() {
  for (let i = 0; i < hSize; i++) {
    mas[i] = []
    for (let j = 0; j < wSize; j++) {
      mas[i][j] = 0
    }
  }
}

goLife()

function drawField() {
  ctx.clearRect(0, 0, wSize * pxSize, hSize * pxSize)
  for (let i = 0; i < hSize; i++) {
    for (let j = 0; j < wSize; j++) {
      if (mas[i][j] === 1) {
        ctx.fillRect(j * pxSize, i * pxSize, pxSize, pxSize)
      }
    }
  }
}

function startLife() {
  let a = 0
  let mas2 = []
  for (let h = 0; h < hSize; h++) {
    mas2[h] = []
    for (let w = 0; w < wSize; w++) {
      let neighbors = 0
      console.log('before - ',a, 'h: ',h,'w: ', w);
      if (mas[fpm(h) - 1][w] === 1) neighbors++ //up
      if (mas[h][fpp(w) + 1] === 1) neighbors++ //right
      if (mas[fpp(h) + 1][w] == 1) neighbors++ //down -
      if (mas[h][fpm(w) - 1] === 1) neighbors++ //left
      if (mas[fpm(h) - 1][fpp(w) + 1] === 1) neighbors++ //up-right
      if (mas[fpp(h) + 1][fpp(w) + 1] === 1) neighbors++ //right-down -
      if (mas[fpp(h) + 1][fpm(w) - 1] === 1) neighbors++ //left-down -
      if (mas[fpm(h) - 1][fpm(w) - 1] === 1) neighbors++ //left-up
      (neighbors === 2 || neighbors === 3)
        ? mas2[h][w] = 1
        : mas2[h][w] = 0
        console.log('after - ',a, 'h: ',h,'w: ', w);
      a++
    }
  }
  mas = mas2
  drawField()
  count++
  console.log(count);
  timer = setTimeout(startLife, 200)
}

function fpm(i) {
  if (i === 0) return hSize
  else return i
}
function fpp(i) {
  if (i === wSize - 1) return -1
  else return i
}

document.querySelector('#btn').onclick = startLife