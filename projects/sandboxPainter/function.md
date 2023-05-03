fillStyle - цвет заливки
fillRect() - заполнить квадрат

strokeStyle - цвет бордера
strokeRect() - только бордеры
lineWidth - толщина

arc() - круг
fill() - заполнить круг

ctx.beginPath() - рисовать все что угодно
ctx.moveTo(50,50); - здвиг
ctx.lineTo(25,100); - линия
ctx.lineTo(75,100); - линия
ctx.closePath() - соединить последнюю точку с первой
ctx.stroke() - отрисовать

ctx.scale(2,2) - масштабирование
ctx.rotate(5) - вращение

ctx.textAlign = 'center' - поциционирование по центру
ctx.font = '60px Roboto' - настройка шрифта
ctx.fillText('Hi',canv.width / 2, canv.height / 2) - задать текст