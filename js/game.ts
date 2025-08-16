const c = document.getElementById("gameCanvas") as HTMLCanvasElement;
let ctx = c.getContext("2d");
const background = new Image();
background.src = "./assets/background.jpg";
const canvasWidth = c.width;
const canvasHeight = c.height;

const player = (x: number, y: number) => {
  if (ctx) {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "blue";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 40);
    ctx.lineTo(x + 10, y - 40);
    ctx.lineTo(x + 10, y - 60);
    ctx.lineTo(x + 20, y - 60);
    ctx.lineTo(x + 20, y - 40);
    ctx.lineTo(x + 30, y - 40);
    ctx.lineTo(x + 30, y);
    ctx.closePath();

    ctx.stroke();
    ctx.fill();
  }
};

const enemy = (x: number, y: number) => {
  if (ctx) {
    ctx.fillStyle = "green";
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fill();
  }
};

const bullet = (x: number, y: number) => {};

const drawGame = () => {
  if (ctx) {
    ctx.drawImage(background, 0, 0, canvasWidth, canvasHeight);
    player(canvasWidth / 2, canvasHeight - 20);
    enemy(200, 200);
    bullet(300, 300);
  }
};

background.onload = () => {
  drawGame();
};

drawGame();

/*
IDEES
Customisation du fond (espace, militaire)
L'ennemi descend et

*/
