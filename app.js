const imageInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#meme");
const topText = document.querySelector("#topTextInput");
const bottomText = document.querySelector("#bottomTextInput");


let image;

imageInput.addEventListener("change", (e) => {
  const imageDataUrl = URL.createObjectURL(e.target.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener(
    "load",
    () => {
      updateMemeCanvas(
        canvas,
        image,
        topTextInput.value,
        bottomTextInput.value
      );
    },
    { once: true }
  );
});

topText.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topText.value, bottomText.value);
});

bottomText.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topText.value, bottomText.value);
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 25);
  const yOffset = height / 25;
  function updateMemeCanvas(event) { 
    let element = event.currentTarget;
    document.getElementById("meme").innerHTML = element;
  }
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);


  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 4);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-serif`;


  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);

  ctx.textBaseline = "bottom";
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width / 2, height - yOffset);
}

