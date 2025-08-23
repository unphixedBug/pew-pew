const enemyImage = new Image();
enemyImage.src = "./assets/enemy1.png";

export const drawEnemy = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) => {
  if (ctx) {
    ctx.drawImage(enemyImage, x, y, 50, 40);
  }
};
