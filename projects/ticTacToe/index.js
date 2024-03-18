const area = document.querySelector(".area");
let move = 0;
let winner = "";
let endGame = false;
let arrPlayerWinner = []; if(localStorage.player != undefined){arrPlayerWinner = JSON.parse(localStorage.getItem("player")); }
let arrPlayerResult = []; if(localStorage.player != undefined){arrPlayerResult = JSON.parse(localStorage.getItem("result")); }



/*hoverJS*/
area.addEventListener('mouseover',hoverOver)
area.addEventListener('mouseout',hoverOut)

function hoverOver(e) {
  if (e.target.classList.contains("box")) {
    if (
      !e.target.classList.contains("cross") &&
      !e.target.classList.contains("zero")
    ) {
      if (move % 2 == 0) {
        e.target.classList.add("cross-shadow");
      } else {
        e.target.classList.add("zero-shadow");
      }
    }
  }
}
function hoverOut(e) {
  if (e.target.classList.contains("box")) {
    e.target.classList.remove("cross-shadow");
    e.target.classList.remove("zero-shadow");
  }
}
/*Main code*/

area.addEventListener("click", startGame);

function startGame(e){
  if (e.target.innerHTML != "") {
      return false;
    } else {
      if (move % 2 == 0) {
        e.target.classList.add('cross')
        e.target.innerHTML = "X";
      } else {
        e.target.classList.add('zero')
        e.target.innerHTML = "O";
      }
      move++;
      winCheck();
    }
  }

function winCheck() {
  const boxes = document.getElementsByClassName("box");
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (i = 0; i < winArr.length; i++) {
    if (
      boxes[winArr[i][0]].innerHTML == "X" &&
      boxes[winArr[i][1]].innerHTML == "X" &&
      boxes[winArr[i][2]].innerHTML == "X"
    ) {
      winner = "крестики";
      endGame = true;
      showWinner(winner);
    } else if (
      boxes[winArr[i][0]].innerHTML == "O" &&
      boxes[winArr[i][1]].innerHTML == "O" &&
      boxes[winArr[i][2]].innerHTML == "O"
    ) {
      winner = "нолики";
      endGame = true;
      showWinner(winner);
    }
  }
  if (move == 9 && winner === "") {
    winner = "ничья";
    endGame = true;
    showWinner(winner);
  }
  function showWinner(who) {
    const winnerOverlay = document.querySelector(".winner-overlay");
    const HTMLwinner = document.querySelector(".winner");
    const HTMLmove = document.querySelector(".moves");
    HTMLwinner.innerHTML = `Победили: ${who}`;
    HTMLmove.innerHTML = `Ходов: ${move}`;
    winnerOverlay.style.display = "block";
  }
  if (endGame) {
    if(arrPlayerWinner.length == 10){
      arrPlayerWinner.shift()
      arrPlayerResult.shift()
    }
    arrPlayerWinner.push(winner);
    arrPlayerResult.push(move);
    //console.log(arrPlayerWinner, arrPlayerResult);
    localStorage.setItem("player", JSON.stringify(arrPlayerWinner));
    localStorage.setItem("result", JSON.stringify(arrPlayerResult));
    area.removeEventListener("click", startGame);
    area.removeEventListener('mouseover',hoverOver)
    area.removeEventListener('mouseover',hoverOut)
  }
}

/* restore button */
document.querySelector(".button").addEventListener("click", function () {
  location.reload();
});

/* localStorage */
let scorePlayer = document.querySelectorAll(".score-player");
let scoreResult = document.querySelectorAll(".score-num");

function refreshScore() {
  if(localStorage.player != undefined){
    for(let i=0;i<arrPlayerWinner.length;i++){
      scorePlayer[i].innerHTML = JSON.parse(localStorage.player)[arrPlayerWinner.length-1-i]
      scoreResult[i].innerHTML = JSON.parse(localStorage.result)[arrPlayerWinner.length-1-i]
    }
  }
}
refreshScore();

document.querySelector('.overlay').addEventListener('click',()=>{
  //console.log('act')
  //document.querySelector(".winner-overlay").style.display = 'none'
  document.querySelector(".winner-overlay").style.width = 'auto'
  document.querySelector('.overlay').style.position = 'static'
  document.querySelector('.modal-window').style.position = 'static'
  document.querySelector('.modal-window').style.transform = 'none'
})

const info = '1.Вёрстка +10\n2.При кликах по игровому полю по очереди отображаются крестики и нолики +10\n3.Игра завершается, когда три фигуры выстроились в ряд +10\n4.По окончанию игры выводится её результат +10\n5.Результаты последних 10 игр сохраняются в local storage +10\n6.Анимации или звуки, или настройки игры +10 (предпоказ следующей фигуры)\n7.Очень высокое качество оформления (Оформление, после окончания игры, можно кликнуть вне поля "close and play new game" и посмотреть на расположение фигур) +10'
console.log(info)