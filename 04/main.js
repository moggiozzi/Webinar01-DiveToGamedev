var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

var KEY = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, ENTER: 13, SPACE: 32, ESC: 27 };

var N = 10;
var M = 10;
var board;
var snake = new Array();

var cellSize = 10;

function initGame(){
    board = new Array(N);
    for (i = 0; i < N; ++i) {
        board[i] = new Array(M);
        for (j = 0; j < M; ++j)
            board[i][j] = 0;
    }
    snake.push(new body(0,0));
    snake.push(new body(0,1));
    snake.push(new body(0,2));
}

function body(x,y){
    this.x = x;
    this.y = y;
}

function loadPage() {
	initGame();
    resizeCanvas();
    setInterval(doStep, 1000 / 30); // 30 кадров в секунду
}

function resizeCanvas() {
    myCanvas.width = window.innerWidth;   // ширина экрана
    myCanvas.height = window.innerHeight; // высота экрана
    cellSize = Math.floor(Math.min(myCanvas.width / M, (myCanvas.height) / N));
}

function doStep(){
    update();
    draw();
}

// обновить состояние игры
function update() {
    for(i = 0; i < snake.length; i++)
    {
        board[snake[i].y][snake[i].x] = 1;
    }
}

function draw() {
    ctx.fillStyle = "#0000ff";
    ctx.fillRect( 0, 0, myCanvas.width, myCanvas.height );

    var i, j;
    for (i = 0; i < N; ++i) {
        for (j = 0; j < M; ++j) {
            if (board[i][j] == 0)
                ctx.fillStyle = "#00ffff";
            else
                ctx.fillStyle = "#ff0000";
            ctx.fillRect( j * cellSize, i * cellSize,
                          cellSize - 2, cellSize - 2);
        }
    }
}

function drawCircle(x,y,r)
{
    ctx.beginPath();
    ctx.arc( x, y, r,0,2*Math.PI);
    ctx.fill();
}

function keyDown()
{
    switch (event.keyCode) {
        case KEY.UP:
            break;
        case KEY.DOWN:
            break;
        case KEY.LEFT:
            break;
        case KEY.RIGHT:
            break;
        case KEY.SPACE:
        case KEY.ENTER:
            break;
        case KEY.ESC:
            break;
    }
}

function keyUp(){}
function mouseDown(){}
function mouseUp(){}
function mouseMove(){}