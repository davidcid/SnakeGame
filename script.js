const snake = document.querySelector("#snake");
let snakeColor = getComputedStyle(snake).backgroundColor;
let snakeX = getComputedStyle(snake).left;
let lft = 20;
const width = 600;

function cambiarColor() {
	if (snakeColor === "yellow") {
		snakeColor = "blue";
		snake.style.backgroundColor = snakeColor;
	} else {
		snakeColor = "yellow";
		snake.style.backgroundColor = snakeColor;
	}
}



function moveAround() {
	snake.style.left = `${lft}px`;
	lft += 20;
	if (lft >= width) {
		lft = 0;
	}
}

setInterval(moveAround, 100);