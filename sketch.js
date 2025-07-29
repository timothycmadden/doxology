let xsize = 10;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(235, 218, 143);
  fill(25, 100, 100);
  let sinbase = sin(width * 0.5);
  let grower = map(sinbase, 0, width, 0, 500);
  rect(width * 0.5, height * 0.5, xsize + grower, xsize + grower);
}
