const width = 600;
const height = 400;

const board = document.querySelector("#board");
const snake = document.querySelector("#snake");
const snakeColor = getComputedStyle(snake).backgroundColor;
const snakeSize = 20;
const snakePosition = [0,0];

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
	snake.style.left = `${snakePosition[0] * (width / snakeSize)}`;
	snake.style.top = `${snakePosition[1] * (height / snakeSize)}`;
}

function moveRight() {
	snakePosition[0] += 1;
	if (snakePosition[0] * snakeSize >= width) {
		snakePosition[0] = 0;
	}
	snake.style.left = `${snakePosition[0] * snakeSize}px`;
	console.log(snakePosition);
}

function moveLeft() {
	snakePosition[0] -= 1;
	if (snakePosition[0] * snakeSize < 0) {
		snakePosition[0] = (width - snakeSize) / snakeSize;
	}
	snake.style.left = `${snakePosition[0] * snakeSize}px`;
	console.log(snakePosition);
}

function moveBottom() {
	snakePosition[1] += 1;
	if (snakePosition[1] * snakeSize >= height) {
		snakePosition[1] = 0;
	}
	snake.style.top = `${snakePosition[1] * snakeSize}px`;
	console.log(snakePosition);
}

function moveUp() {
	snakePosition[1] -= 1;
	if (snakePosition[1] * snakeSize < 0) {
		snakePosition[1] = (height - snakeSize) / snakeSize;
	}
	snake.style.top = `${snakePosition[1] * snakeSize}px`;
	console.log(snakePosition);
}

newGame();
//setInterval(moveUp, 1000);

document.addEventListener('keydown', function(event) {
	let direction = event.which;
	console.log(direction);
	switch (direction) {
		case 39:
			moveRight();
			break;
			case 37:
				moveLeft();
				break;
			case 38:
				moveUp();
				break;
			case 39:
				moveRight();
				break;
			case 40:
				moveBottom();
				break;
		default:
				moveRight();
	}
});
