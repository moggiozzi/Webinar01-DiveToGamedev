var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");

function loadPage() {
    resizeCanvas();
    draw();
}

function resizeCanvas() {
    myCanvas.width = window.innerWidth;   // ширина экрана
    myCanvas.height = window.innerHeight; // высота экрана
}

function draw() {
    ctx.fillStyle = "#0000ff";
    ctx.fillRect( 0, 0, myCanvas.width, myCanvas.height );
    ctx.fillStyle = "#00ffff";
    ctx.font = "20px Arial";
    ctx.fillText("Работает!", 100, 100);
}