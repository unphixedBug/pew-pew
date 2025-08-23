import { drawPlayer } from "./player.ts";
import { drawEnemy } from "./enemy.ts";
import { drawBullet } from "./bullet.ts";

const c = document.getElementById("gameCanvas") as HTMLCanvasElement;
let ctx = c.getContext("2d");

const canvasWidth = c.width;
const canvasHeight = c.height;

let playerX = canvasWidth / 2 - 25;

let bullets: Array<{ x: number; y: number }> = [];

const drawGame = () => {
  if (ctx) {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    drawPlayer(ctx, playerX, canvasHeight);
    drawEnemy(ctx, 200, 200);
    bullets.forEach((bulletData) => {
      drawBullet(ctx, bulletData.x, bulletData.y);
    });
  }
};

const updateBullets = () => {
  bullets.forEach((bullet) => (bullet.y -= 5));

  bullets = bullets.filter((bullet) => bullet.y > -20);
};

document.addEventListener("keydown", (event) => {
  const speed = 25;

  if (event.key === "ArrowLeft" && playerX > 0) {
    playerX -= speed;
  }
  if (event.key === "ArrowRight" && playerX < canvasWidth - 50) {
    playerX += speed;
  }

  if (event.key === " ") {
    bullets.push({ x: playerX + 20, y: canvasHeight - 40 });
  }

  drawGame();
});

setInterval(() => {
  updateBullets();
  drawGame();
}, 16);

/*
IDEES
Customisation du fond (espace, militaire)
L'ennemi descend et tue le joueur au touché (de plus en plus d'ennemis apparaissent)
*/
