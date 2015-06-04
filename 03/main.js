var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

var radius = 100;
var x = radius;
var y = radius;
var dx = 10;
var dy = 10;

var KEY = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, ENTER: 13, SPACE: 32, ESC: 27 };

var N = 10;
var M = 10;
var board;
var snake = new Array();
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
}

function doStep(){
    update();
    draw();
}

// обновить состояние игры
function update() {
    if ( x + radius + dx > myCanvas.width)
        dx = -10;
    if ( x - radius - dx < 0 )
        dx = 10;
	if ( y + radius + dy > myCanvas.height)
		dy = -10;
	if ( y - radius - dy < 0 )
		dy = 10;
	x += dx;
	y += dy;
}

function draw() {
    ctx.fillStyle = "#0000ff";
    ctx.fillRect( 0, 0, myCanvas.width, myCanvas.height );

    ctx.fillStyle = "#ff0000";
    drawCircle(x,y,100);

    ctx.fillStyle = "#00ffff";
    ctx.font = "20px Arial";
    ctx.fillText("Работает!", 100, 100);
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
            dy = -10;
			dx = 0;
            break;
        case KEY.DOWN:
			dy = 10;
			dx = 0;
            break;
        case KEY.LEFT:
            dx = -10;
			dy = 0;
            break;
        case KEY.RIGHT:
            dx = 10;
			dy = 0;
            break;
        case KEY.SPACE:
        case KEY.ENTER:
            x = myCanvas.width / 2;
			y = myCanvas.height / 2;
            break;
        case KEY.ESC:
            break;
    }
}

function keyUp(){}
function mouseDown(){}
function mouseUp(){}
function mouseMove(){}