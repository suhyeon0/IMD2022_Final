let gap = 10;
let cirNum = 80;
let cirSize = 20;
let angle = 0;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  angleMode(degrees);
}

function draw() {
  background("black");
  push();
  // background(0);
  // mouse;
  noCursor();
  noStroke();
  fill(255, 255, 200, 200);
  circle(mouseX, mouseY, 20);
  pop();

  //main
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  // angle = map(mouseX, 0, width, -1, 1);
  angle = angle + map(mouseX, 0, width, -0.001, 0.001);

  noFill();
  stroke(255, 255, 200);
  strokeWeight(0.4);

  for (let i = 0; i < cirNum; i++) {
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle * i, 360 - i);
  }
  pop();

  push();
  noStroke();
  fill(255);
  translate(width / 2, height / 2 + 250);
  textAlign(CENTER, CENTER);

  textSize(24);
  text("The orbit of stars", 10, 5);

  textSize(18);
  fill(190);
  text("Move the mouseX", 10, 30);
  pop();
}
