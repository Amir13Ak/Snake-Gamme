const snakeBoard = document.getElementById("snakeBoard") ;const snakeCTX = snakeBoard.getContext('2d') ;const board_border = '#cccccc' ;const board_background = "#cccccc" ;const snake_color = 'black' ;let flag = 0 ;let dx = 10 ;let dy = 0 ;let food_x = 100  ;let food_y = 100  ;let snake = [    {x: 200, y: 200} ,    {x: 190, y: 200} ,    {x: 180, y: 200} ,    {x: 170, y: 200} ,] ;document.addEventListener("keydown", changeSnake) ;function makeBoard() {    snakeCTX.fillStyle = board_background ;    snakeCTX.fillRect(0, 0, snakeBoard.width, snakeBoard.height) ;}function drawSnake() {    snake.forEach(newSnake) ;}function newSnake(snake) {    snakeCTX.fillStyle = snake_color ;    snakeCTX.fillRect(snake.x, snake.y, 10, 10) ;}function move_snake() {    const newValue = {x: snake[0].x + dx, y: snake[0].y + dy} ;    snake.unshift(newValue) ;    if (snake[0].x === food_x && snake[0].y === food_y){        setNewXY() ;    } else {        snake.pop() ;    }}function changeSnake(event) {    const keyPressed = event.keyCode ;    if (keyPressed === 37) {        dx = -10 ;        dy = 0 ;    }    if (keyPressed === 39) {        dx = 10 ;        dy = 0 ;    }    if (keyPressed === 38) {        dx = 0 ;        dy = -10 ;    }    if (keyPressed === 40) {        dx = 0 ;        dy = 10 ;    }}function randomNum(min, max) {    return Math.round((Math.random() * (max-min) + min) / 10) * 10;}function makeFood() {    snakeCTX.fillStyle = '#cc3931';    snakeCTX.fillRect(food_x, food_y, 10, 10);}function setNewXY() {    food_x = randomNum(0 , snakeBoard.width - 10 ) ;    food_y = randomNum(0 , snakeBoard.height - 10 ) ;}function checkGameOver() {    if ( (snake[0].x < 0) || (snake[0].x > snakeBoard.width - 10) || (snake[0].y < 0) || (snake[0].y > snakeBoard.height -10) ) {        flag = 1 ;    }else{        flag = 0 ;    }    for (let i = 1; i < snake.length; i++) {        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {            flag = 1 ;        }    }}function startGame() {    if (flag === 0){    setTimeout(function () {        makeBoard()  ;        drawSnake()  ;        makeFood()   ;        move_snake() ;        checkGameOver() ;        startGame()  ;    }, 100)    }}