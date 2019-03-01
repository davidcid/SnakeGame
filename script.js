const width = 600;
const height = 400;

const board = document.querySelector("#board");
const snake = document.querySelector("#snake");
let snakeColor = getComputedStyle(snake).backgroundColor;
let snakeX = getComputedStyle(snake).left;
let snakeSize = 20;
let snakePosition = [0,0];

function cambiarColor() {
	if (snakeColor === "yellow") {
		snakeColor = "blue";
		snake.style.backgroundColor = snakeColor;
	} else {
		snakeColor = "yellow";
		snake.style.backgroundColor = snakeColor;
	}
}

function newGame() {
	board.style.width = `${width}px`;
	board.style.height = `${height}px`;
}

function moveRight() {
	snake.style.left = `${snakePosition[0] * snakeSize}px`;
	snakePosition[0] += 1;
	console.log(snakePosition);
	if (snakePosition[0] * snakeSize >= width) {
		snakePosition[0] = 0;
	}
}

function moveLeft() {
	snake.style.left = `${snakePosition[0] * snakeSize}px`;
	snakePosition[0] -= 1;
	console.log(snakePosition);
	if (snakePosition[0] * snakeSize < 0) {
		snakePosition[0] = width / snakeSize;
	}
}

function moveDown() {
	snake.style.top = `${step}px`;
	step += 20;
	if (step >= height) {
		step = 0;
	}
}

function moveUp() {
	snake.style.top = `${step}px`;
	step -= 20;
	if (step < 0) {
		step = height + step;
	}
}


newGame();
setInterval(moveLeft, 1000);