function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(235, 218, 143);
  let t = millis() * 0.002;
  // Size will oscillate between 100 and 200
  let size = map(sin(t), -1, 1, 100, 200);
  fill(70, 125, 60);
  noStroke();
  rect(width / 2, height / 2, size, size);
}