function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function drawGrid() {
  let w = width / 3;
  let h = height / 3;
  strokeWeight(4);
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);
}
