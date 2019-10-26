let canvas;
let canvasContext;
let ballX = 50;
let ballY = 50;
let ballSpeedX = 10;
let ballSpeedY = 4;

let player1Score = 0;
let player2Score = 0;
const WINNING_SCORE = 5;

let showingWinScreen = false;

let paddle1Y = 250;
let paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 10;

function calculateMousePosition(mouseMoveEvent) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;
  let mouseX = mouseMoveEvent.clientX - rect.left - root.scrollLeft;
  let mouseY = mouseMoveEvent.clientY - rect.top - root.scrollTop;
  return {
    x:mouseX,
    y:mouseY
  }
}

function handleMouseClick(mouseDownEvent) {
  if (showingWinScreen == true) {
    player1Score = 0;
    player2Score = 0;
    (showingWinScreen = false);
  }
}

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  let framesPerSecond = 40;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000/framesPerSecond);

  canvas.addEventListener('mousedown', handleMouseClick);

  canvas.addEventListener('mousemove',
function(mouseMoveEvent) {
  let mousePosition = calculateMousePosition(mouseMoveEvent);
  paddle1Y = mousePosition.y-(PADDLE_HEIGHT/2);
});

}

function ballReset() {
  if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
    showingWinScreen = true;
  }

  ballSpeedX = -ballSpeedX;
  ballX = canvas.width/2;
  ballY = canvas.height/2;
}

function computerMovement() {
  let paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);
  if (paddle2YCenter < ballY-35) {
    paddle2Y += 10;
  } else if (paddle2YCenter < ballY+35) {
    paddle2Y -= 10;
  }
}

function moveEverything() {
  if (showingWinScreen == true) {
    return;
  }
  computerMovement();

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballX > canvas.width) {
    if (ballY > paddle2Y &&
        ballY < paddle2Y+PADDLE_HEIGHT) {
      ballSpeedX = -ballSpeedX;
      let differenceY = ballY - (paddle2Y+PADDLE_HEIGHT/2);
      ballSpeedY = differenceY * 0.35;
    } else {
    player1Score++; //must be before ballRESET()
    ballReset();

    }
  } else if (ballX < 0) {
    if (ballY > paddle1Y &&
        ballY < paddle1Y+PADDLE_HEIGHT) {
      ballSpeedX = -ballSpeedX;

      let differenceY = ballY - (paddle1Y+PADDLE_HEIGHT/2);
      ballSpeedY = differenceY * 0.35;

    } else {
    player2Score++; //must be before ballRESET()
    ballReset();

    }
  }

  if (ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  } else if (ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }
}

function drawNet() {
  for (i = 0; i < canvas.height; i+=40) {
    colorRect(canvas.width/2-1,i,2,20,"white");
    canvas[i]
  }
}

function drawEverything() {
  //makes the black canvass
  colorRect(0,0,canvas.width,canvas.height,"black");

  if (showingWinScreen == true) {
    if (player1Score >= WINNING_SCORE) {
      canvasContext.fillStyle = "white";
      canvasContext.fillText("Player One Won!", 350, 200);
    }
    if (player2Score >= WINNING_SCORE) {
      canvasContext.fillStyle = "white";
      canvasContext.fillText("Player Two Won!", 350, 200);
    }
    canvasContext.fillStyle = "white";
    canvasContext.fillText("Click to continue", 350, 500);
    return;
  }

  drawNet();

  //left player paddle
  colorRect(0,paddle1Y,PADDLE_WIDTH,PADDLE_HEIGHT,"white");

  //right computer paddle
  colorRect(canvas.width-PADDLE_WIDTH,paddle2Y,PADDLE_WIDTH,PADDLE_HEIGHT,"white");

  //ball
  colorCircle(ballX, ballY, 10, "white");

  canvasContext.fillText(player1Score, 100, 100);
  canvasContext.fillText(player2Score, canvas.width-100, 100);
}

function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, 10, 0, Math.PI*2, true);
  canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}
