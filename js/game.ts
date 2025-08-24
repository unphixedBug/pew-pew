import { drawPlayer } from "./player.ts";
import { drawEnemy } from "./enemy.ts";
import { drawBullet } from "./bullet.ts";

const c = document.getElementById("gameCanvas") as HTMLCanvasElement;
let ctx = c.getContext("2d");

const canvasWidth = c.width;
const canvasHeight = c.height;

let playerX = canvasWidth / 2 - 25;
let bullets: Array<{ x: number; y: number; hit?: boolean }> = [];
let enemyPosition = Math.min(
  Math.floor(Math.random() * canvasWidth),
  canvasWidth - 50
);
let score = 0;

const checkCollision = (bullet: { x: number; y: number; hit?: boolean }) => {
  const bulletWidth = 10;
  const bulletHeight = 20;
  const enemyWidth = 50;
  const enemyHeight = 40;

  return (
    bullet.x < enemyPosition + enemyWidth &&
    bullet.x + bulletWidth > enemyPosition &&
    bullet.y < 50 + enemyHeight &&
    bullet.y + bulletHeight > 50
  );
};

const drawGame = () => {
  if (ctx) {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    drawPlayer(ctx, playerX, canvasHeight);
    drawEnemy(ctx, enemyPosition, 50);
    bullets.forEach((bulletData) => {
      drawBullet(ctx, bulletData.x, bulletData.y);
    });
    ctx.font = "20px Arial";
    ctx.fillStyle = "green";
    ctx.fillText(`Score: ${score}/10`, 10, 30);
  }
};

const updateBullets = () => {
  bullets.forEach((bullet) => {
    bullet.y -= 20;

    if (checkCollision(bullet)) {
      score += 1;
      bullet.hit = true;
      enemyPosition = Math.min(
        Math.floor(Math.random() * canvasWidth),
        canvasWidth - 50
      );
    }
  });

  // Supprimer bullets qui sortent de l'écran OU qui ont touché l'ennemi
  bullets = bullets.filter((bullet) => bullet.y > -20 && !(bullet as any).hit);
};

document.addEventListener("keydown", (event) => {
  const speed = 35;

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

const gameInterval = setInterval(() => {
  if (score >= 10) {
    clearInterval(gameInterval);
    if (ctx) {
      ctx.fillStyle = "green";
      ctx.font = "48px Arial";
      ctx.fillText("VICTOIRE !", canvasWidth / 2 - 100, canvasHeight / 2);
    }
    return;
  }

  updateBullets();
  drawGame();
}, 16);

/*
IDEES
Customisation du fond (espace, militaire)
L'ennemi descend et tue le joueur au touché (de plus en plus d'ennemis apparaissent)
*/
