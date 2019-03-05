const width = 600;
const height = 400;
const snakeSize = 20;

const board = document.querySelector("#board");
const snake = document.querySelector("#snake");
const apple = document.querySelector("#apple");
let tails = document.querySelectorAll(".tail");
const snakeColor = getComputedStyle(snake).backgroundColor;

let snakePosition = [[0,0]];
let applePosition = [0,0];
let direction = 39; // unicode keys: 37=left, 38=top, 39=right, 40=bottom

function cambiarColor() {
	if (snakeColor === "yellow") {
		snakeColor = "blue";
		snake.style.backgroundColor = snakeColor;
	} else {
		snakeColor = "yellow";
		snake.style.backgroundColor = snakeColor;
	}
}

function createApple() {
	applePosition[0] = (Math.floor((Math.random() * width / snakeSize)));
	applePosition[1] = (Math.floor((Math.random() * height / snakeSize)));
	apple.style.left = `${applePosition[0] * snakeSize}px`;
	apple.style.top = `${applePosition[1] * snakeSize}px`;
	//console.log(applePosition);
}

function newGame() {
	board.style.width = `${width}px`;
	board.style.height = `${height}px`;
	/*snake.style.left = `${snakePosition[0] * (width / snakeSize)}`;
	snake.style.top = `${snakePosition[1] * (height / snakeSize)}`;*/
	createApple();
}

function moveRight() {
	snakePosition[0][0] += 1;
	if (snakePosition[0][0] * snakeSize >= width) {
		snakePosition[0][0] = 0;
	}
	snake.style.left = `${snakePosition[0][0] * snakeSize}px`;
}

function moveLeft() {
	snakePosition[0][0] -= 1;
	if (snakePosition[0][0] * snakeSize < 0) {
		snakePosition[0][0] = (width - snakeSize) / snakeSize;
	}
	snake.style.left = `${snakePosition[0][0] * snakeSize}px`;
}

function moveBottom() {
	snakePosition[0][1] += 1;
	if (snakePosition[0][1] * snakeSize >= height) {
		snakePosition[0][1] = 0;
	}
	snake.style.top = `${snakePosition[0][1] * snakeSize}px`;
}

function moveUp() {
	snakePosition[0][1] -= 1;
	if (snakePosition[0][1] * snakeSize < 0) {
		snakePosition[0][1] = (height - snakeSize) / snakeSize;
	}
	snake.style.top = `${snakePosition[0][1] * snakeSize}px`;
}

function checkCollision() {
	if (snakePosition[0][0] === applePosition[0] &&
			snakePosition[0][1] === applePosition[1]) {
		createApple();
		createTail();
		//tails[0].style.left = `${snakeTail[0]}`;
		//tails[1].style.top = `${snakeTail[1]}`;
	}
}

function createTail() {
	let tail = document.createElement("div");
	board.appendChild(tail);
	tail.classList.add("tail");
	snakePosition.push([snakePosition[snakePosition.length - 1][0], snakePosition[snakePosition.length - 1][1]]);
	tail.style.left = `${snakePosition[snakePosition.length - 1][0] * snakeSize}px`;
	tail.style.top = `${snakePosition[snakePosition.length - 1][1] * snakeSize}px`;

	tails = document.querySelectorAll(".tail");
	console.log(tails);
	console.log(snakePosition);
}
function moveSnake() {
	for (let i = 0; i < tails.length; i++) {
		tails[i].style.left = `${snakePosition[i][0] * snakeSize}px`;
		tails[i].style.top = `${snakePosition[i][1] * snakeSize}px`;
		snakePosition[i] =
	}

	//console.log("old position: " + snakePosition[0]);
	switch (direction) {
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
			moveRight();;
	}

	//console.log("new position: " + snakePosition[0]);

	checkCollision();

}



newGame();
setInterval(moveSnake, 100);

document.addEventListener('keydown', function(event) {
	direction = event.which;
	//console.log(direction);
});
