const playerImage = new Image();
playerImage.src = "./assets/player.png";

export const drawPlayer = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number
) => {
  const playerWidth = 50;
  const playerHeight = 40;

  if (ctx) {
    ctx.drawImage(playerImage, x, y - playerHeight, playerWidth, playerHeight);
  }
};
