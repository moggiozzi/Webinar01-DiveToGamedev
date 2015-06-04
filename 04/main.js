var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

var KEY = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, ENTER: 13, SPACE: 32, ESC: 27 };

var N = 50;
var M = 50;
var board;
var snake;

var cellSize = 10;

var DIRECTION = { RIGHT: 0, DOWN: 1, LEFT: 2, UP: 3 };

var currentTime;
var lastTime;

function initGame(){
    board = new Array(N);
    for (i = 0; i < N; ++i) {
        board[i] = new Array(M);
        for (j = 0; j < M; ++j)
            board[i][j] = 0;
    }
    snake = new Snake();
    currentTime = lastTime = new Date().getTime();
}
function copy(obj)
{
    var clone = {}; // новый пустой объект
// скопируем в него все свойства user
    for (var key in obj) {
        clone[key] = obj[key];
    }
}

function Snake(){
    this.body = new Array();
    this.body.push(new body(0,0));
    this.body.push(new body(0,1));
    this.body.push(new body(0,2));
    this.dir = DIRECTION.DOWN;
    this.speed = 1; // скорость перемещения змейки (ячеек в секунду)
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
    var i;
    switch (snake.dir)
    {
        case DIRECTION.DOWN:
                snake.body.shift();
                snake.body.push( new body( snake.body[snake.body.length - 1].x, snake.body[snake.body.length - 1].y+1 ));
            break;
        case DIRECTION.UP:
            break;
        case DIRECTION.LEFT:
            break;
        case DIRECTION.RIGHT:
            break;
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
    ctx.fillStyle = "#ff0000";
    for(i = 0; i < snake.body.length; i++)
    {
        ctx.fillRect( snake.body[i].x * cellSize, snake.body[i].y * cellSize,
            cellSize - 2, cellSize - 2);
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