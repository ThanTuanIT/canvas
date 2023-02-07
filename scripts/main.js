let canvas = document.getElementById("myCanvas");

/**
 *
 * @param {any} canvas
 * @returns {CanvasRenderingContext2D}
 */
function createPaper(canvas) {
  return canvas.getContext("2d");
}

let paper = createPaper(canvas);

function drawEmoji1(positionPx, positionPy) {
  paper.beginPath();
  paper.arc(
    positionPx,
    positionPy,
    50,
    (45 * Math.PI) / 180,
    (340 * Math.PI) / 180
  );
  paper.moveTo(positionPx, positionPy);
  paper.lineTo(positionPx + 48, positionPy - 17);
  paper.moveTo(positionPx, positionPy);
  paper.lineTo(positionPx + 35, positionPy + 35);
  paper.clearRect(0, 0, canvas.width, canvas.height);
  paper.stroke();
}

function drawEmoji2(positionPx, positionPy) {
  paper.beginPath();
  paper.moveTo(positionPx, positionPy);
  paper.arc(positionPx, positionPy, 50, 0, 2 * Math.PI);
  paper.moveTo(positionPx, positionPy);
  paper.lineTo(positionPx + 50, positionPy);
  paper.clearRect(0, 0, canvas.width, canvas.height);
  paper.stroke();
}

function drawCircle() {
  let width = Math.random() * canvas.width;
  let height = Math.random() * canvas.height;
  paper.beginPath();
  paper.arc(width, height, 10, 0, 2 * Math.PI);
  paper.stroke();
}

canvas.addEventListener("mousemove", (event) => {
  let positionPx = event.x - canvas.getBoundingClientRect().left;
  let positionPy = event.y - canvas.getBoundingClientRect().top;
  drawEmoji1(positionPx, positionPy);
});

canvas.addEventListener("click", (event) => {
  let positionPx = event.x - canvas.getBoundingClientRect().left;
  let positionPy = event.y - canvas.getBoundingClientRect().top;
  drawEmoji2(positionPx, positionPy);
  setTimeout(function () {
    drawEmoji1(positionPx, positionPy);
  }, 200);
});
