function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function drawGrid() {
  let w = width / 3;
  let h = height / 3;
  strokeWeight(4);
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);
}

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let players = ['X', 'O'];
let currentPlayer = 0;


function drawMarks() {
  let w = width / 3;
  let h = height / 3;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[j][i];
      textSize(32);
      if (spot == players[1]) {
        noFill();
        ellipse(x, y, w / 2);
      } else if (spot == players[0]) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }
    }
  }
}


function switchPlayer() {
  currentPlayer = (currentPlayer + 1) % players.length;
}


function mousePressed() {
  let w = width / 3;
  let h = height / 3;
  let i = floor(mouseX / w);
  let j = floor(mouseY / h);

  if (board[j][i] == '') {
    board[j][i] = players[currentPlayer];
    switchPlayer();
  }
}

function equals3(a, b, c) {
  return (a == b && b == c && a != '');
}

function checkWinner() {
  let winner = null;

  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }
}







