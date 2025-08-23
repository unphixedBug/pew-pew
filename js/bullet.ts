const bulletImage = new Image();
bulletImage.src = "./assets/bullet.png";

export const drawBullet = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) => {
  const bulletWidth = 10;
  const bulletHeight = 20;

  if (ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, bulletWidth, bulletHeight);
  }
};
