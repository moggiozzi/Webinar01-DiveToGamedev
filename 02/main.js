var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

var radius = 100;
var x = radius;
var y = radius;

var dx = 10;

function loadPage() {
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
    x = x + dx;
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