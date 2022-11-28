const snakeBoard = document.getElementById("snakeBoard") ;const snakeCTX = snakeBoard.getContext('2d') ;const board_border = '#cccccc' ;const board_background = "#cccccc" ;const snake_color = 'black' ;let dx = 10 ;let dy = 0 ;let snake = [    {x: 200, y: 200},    {x: 190, y: 200},    {x: 180, y: 200},    {x: 170, y: 200},] ;document.addEventListener("keydown", changeSnake);function makeBoard() {    snakeCTX.fillStyle = board_background;    snakeCTX.strokestyle = board_border;    snakeCTX.fillRect(0, 0, snakeBoard.width, snakeBoard.height);    snakeCTX.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);}function drawSnake() {    snake.forEach(newSnake)}function newSnake(snakePart) {    snakeCTX.fillStyle = snake_color;    snakeCTX.fillRect(snakePart.x, snakePart.y, 10, 10);    snakeCTX.strokeRect(snakePart.x, snakePart.y, 10, 10);}function move_snake() {    const head = {x: snake[0].x + dx, y: snake[0].y + dy};    snake.unshift(head);}function changeSnake(event) {    const LEFT_KEY = 37;    const RIGHT_KEY = 39;    const UP_KEY = 38;    const DOWN_KEY = 40;    const keyPressed = event.keyCode;    const goingUp = dy === -10;    const goingDown = dy === 10;    const goingRight = dx === 10;    const goingLeft = dx === -10;    if (keyPressed === LEFT_KEY && !goingRight) {        dx = -10;        dy = 0;    }    if (keyPressed === UP_KEY && !goingDown) {        dx = 0;        dy = -10;    }    if (keyPressed === RIGHT_KEY && !goingLeft) {        dx = 10;        dy = 0;    }    if (keyPressed === DOWN_KEY && !goingUp) {        dx = 0;        dy = 10;    }}function startGame() {    setTimeout(function onTick() {        makeBoard();        drawSnake();        move_snake();        drawSnake();        startGame();    }, 100)}