const width = 200;
const height = 200;
const minimumSize = 20;

const board = document.querySelector("#board");
const snake = document.querySelector("#snake");
const apple = document.querySelector("#apple");
let tails = document.querySelectorAll(".tail");
const snakeColor = getComputedStyle(snake).backgroundColor;

let snakePosition = [[0,0]];
const applePosition = [0,0];
let direction = 39; // unicode keys: 37=left, 38=top, 39=right, 40=bottom

function cambiarColor() {
	if (snakeColor === "yellow") {
		snakeColor = "blue";
		tails[0].style.backgroundColor = snakeColor;
	} else {
		snakeColor = "yellow";
		tails[0].style.backgroundColor = snakeColor;
	}
}

function createApple() {
	applePosition[0] = (Math.floor((Math.random() * width / minimumSize)));
	applePosition[1] = (Math.floor((Math.random() * height / minimumSize)));
	apple.style.left = `${applePosition[0] * minimumSize}px`;
	apple.style.top = `${applePosition[1] * minimumSize}px`;
	//console.log(applePosition);
}

function newGame() {
	board.style.width = `${width}px`;
	board.style.height = `${height}px`;
	tails[0].style.width = `${minimumSize}px`;
	tails[0].style.height = `${minimumSize}px`;
	apple.style.width = `${minimumSize}px`;
	apple.style.height = `${minimumSize}px`;
	/*snakePosition[0][0] = (Math.floor((Math.random() * width / minimumSize)));
	snakePosition[0][1] = (Math.floor((Math.random() * height / minimumSize)));*/
	tails[0].style.left = `${snakePosition[0][0] * (width / minimumSize)}`;
	tails[0].style.top = `${snakePosition[0][1] * (height / minimumSize)}`;
	createApple();
}

function moveRight() {
	snakePosition[0][0] += 1;
	if (snakePosition[0][0] * minimumSize >= width) {
		snakePosition[0][0] = 0;
	}
	tails[0].style.left = `${snakePosition[0][0] * minimumSize}px`;
}

function moveLeft() {
	snakePosition[0][0] -= 1;
	if (snakePosition[0][0] * minimumSize < 0) {
		snakePosition[0][0] = (width - minimumSize) / minimumSize;
	}
	tails[0].style.left = `${snakePosition[0][0] * minimumSize}px`;
}

function moveBottom() {
	snakePosition[0][1] += 1;
	if (snakePosition[0][1] * minimumSize >= height) {
		snakePosition[0][1] = 0;
	}
	tails[0].style.top = `${snakePosition[0][1] * minimumSize}px`;
}

function moveUp() {
	snakePosition[0][1] -= 1;
	if (snakePosition[0][1] * minimumSize < 0) {
		snakePosition[0][1] = (height - minimumSize) / minimumSize;
	}
	tails[0].style.top = `${snakePosition[0][1] * minimumSize}px`;
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
	const tailPosition = snakePosition[snakePosition.length - 1];
	snakePosition.push([tailPosition[0], tailPosition[1]]);
	const tail = document.createElement("li");
	snake.appendChild(tail);
	tail.classList.add("tail");
	tail.style.width = `${minimumSize}px`;
	tail.style.height = `${minimumSize}px`;
	tail.style.left = `${snakePosition[snakePosition.length - 1][0] * minimumSize}px`;
	tail.style.top = `${snakePosition[snakePosition.length - 1][1] * minimumSize}px`;
	tails = document.querySelectorAll(".tail");
}

function moveSnake() {
	oldPosition = [...snakePosition];

	//console.log(oldPosition);

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

	for (let i = 1; i < tails.length; i++) {
		snakePosition[i] = [...oldPosition[i - 1]];
		//console.log(i);
		//console.log(snakePosition[i] + "-" + oldPosition[i]);
		tails[i].style.left = `${oldPosition[i][0] * minimumSize}px`;
		tails[i].style.top = `${oldPosition[i][1] * minimumSize}px`;
	}


	//console.log("New Position: " + snakePosition[0]);

	checkCollision();
}

newGame();
setInterval(moveSnake, 100);

document.addEventListener('keydown', function(event) {
	direction = event.which;
	//console.log(direction);
});
