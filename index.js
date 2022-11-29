let snakeBoard = document.getElementById("myCanvas") ;const snakeCTX = snakeBoard.getContext('2d') ;let blockBoard = document.getElementById("blockCanvas") ;const blockCTX = blockBoard.getContext('2d') ;//let x = document.getElementById("myCanvas").offsetLeft ;//let y = document.getElementById("myCanvas").offsetTop ;let flag = 0 ;let toTal = 0 ;let dx = 10 ;let dy = 0 ;let fx = 100  ;let fy = 100  ;let bx = 10 ;let by = 0 ;let temp = 0 ;let blockAR = [    {x: 0 , y: 0}] ;let sPeed = 100 ;let snake = [    {x: 150, y: 250} ,    {x: 140, y: 250} ,    {x: 130, y: 250} ,    {x: 120, y: 250} , ] ;document.addEventListener("keydown", changeSnake) ;document.getElementById("score").innerText = "Score" + " " + "=" + " " + toTal ;function speedChanger(a) {    if (a === "+"){        sPeed = sPeed - 10 ;    }    if (a === "-"){        sPeed = sPeed + 10 ;    }}function makeBoard() {    snakeCTX.fillStyle = "#cccccc" ;    snakeCTX.fillRect(0, 0, snakeBoard.width, snakeBoard.height) ;}function drawSnake() {    snake.forEach(newSnake) ;}function newSnake(snake) {    snakeCTX.fillStyle = 'black' ;    snakeCTX.fillRect(snake.x, snake.y, 10, 10) ;}function changeSnake(event) {    const keyDown = event.keyCode ;    if (keyDown === 37 && dx !== 10) {        dx = -10 ;        dy = 0 ;    }    if (keyDown === 39 && dx !== -10) {        dx = 10 ;        dy = 0 ;    }    if (keyDown === 38 && dy !== 10) {        dx = 0 ;        dy = -10 ;    }    if (keyDown === 40 && dy !== -10) {        dx = 0 ;        dy = 10 ;    }}function movingSnake() {    const newValue = {x: snake[0].x + dx, y: snake[0].y + dy} ;    snake.unshift(newValue) ;    if (snake[0].x === fx && snake[0].y === fy){        setNewXY() ;    } else {        snake.pop() ;    }}function randomNum(min , max) {  return Math.round((Math.random() * (max-min) + min) / 10) * 10 ;}function makeFood() {    snakeCTX.fillStyle = '#cc3931' ;    snakeCTX.fillRect(fx, fy, 10, 10) ;}function setNewXY() {    fx = randomNum(0 , snakeBoard.width - 10 ) ;    fy = randomNum(0 , snakeBoard.height - 10 ) ;    toTal = toTal + 1 ;    document.getElementById("score").innerText = "Score" + " " + "=" + " " + toTal ;}function makeBlock() {    for (let j = 0 ; j < 5 ; j++){        bx = randomNum(0 , blockBoard.width - 10 ) ;        by = randomNum(0 , blockBoard.height - 10 ) ;        const newValue = {x: blockAR[0].x + bx, y: blockAR[0].y + by} ;        blockAR.unshift(newValue) ;        blockCTX.fillStyle = '#262626' ;        blockCTX.fillRect(blockAR[j], blockAR[j], 10, 50) ;        temp = temp + 1 ;    }}function checkGameOver() {  let sARx = snake[0].x ;  let sARy = snake[0].y ;    if ( (sARx < 0) || (sARx > snakeBoard.width - 10) ||         (sARy < 0) || (sARy > snakeBoard.height - 10) ) {        flag = 1 ;    }else{        flag = 0 ;    }    for (let i = 1 ; i < snake.length ; i++) {        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {            flag = 1 ;            break ;        }    }    alertGameOver() ;}function alertGameOver() {    let sARx = snake[0].x ;    let sARy = snake[0].y ;    if ((sARx < 0) || (sARx > snakeBoard.width -10 ) ||        (sARy < 0) || (sARy > snakeBoard.height - 10 )) {        flag = flag + 1 ;    }    for (let i = 1 ; i < snake.length ; i++) {        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {            flag = flag + 1 ;            break ;        }    }}function startGame() {    if (flag === 0){    setTimeout(function () {        makeBoard()   ;        drawSnake()   ;        makeFood()    ;        movingSnake() ;        checkGameOver() ;        startGame()   ;    }, sPeed)    }else {        if (flag === 2){            alert("....Game Over....")        }    }}function reSet() {    snake = [        {x: 150, y: 250} ,        {x: 140, y: 250} ,        {x: 130, y: 250} ,        {x: 120, y: 250} , ] ;    fx = 100  ;    fy = 100  ;    dx = 10   ;    dy = 0    ;    temp = 0  ;    toTal = 0 ;    sPeed = 100 ;    snakeBoard.width = 400 ;    snakeBoard.height = 400 ;    document.getElementById("score").innerText = "Score" + " " + "=" + " " + toTal ;    makeBoard()   ;    drawSnake()   ;    movingSnake() ;    makeFood()    ;    if (flag > 0) {        flag = 0 ;        startGame() ;    }    }