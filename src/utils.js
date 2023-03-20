export async function downloadImage(meme) {
  const canvas = document.createElement("canvas");

  canvas.width = 550;

  canvas.height = 700;
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = meme.imageUrl;
  await new Promise((resolve) => {
    img.onload = resolve;
  });
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.font = "30px Impact";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(meme.textTop, canvas.width / 2, 0);
  ctx.strokeText(meme.textTop, canvas.width / 2, 0);

  ctx.textBaseline = "bottom";
  ctx.fillText(meme.textBottom, canvas.width / 2, canvas.height);
  ctx.strokeText(meme.textBottom, canvas.width / 2, canvas.height);

  const url = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.download = `meme${Math.random()}.png`;
  link.href = url;
  link.click();
}
