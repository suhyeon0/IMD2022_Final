function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(0);

  push();
  fill(255);
  translate(width / 2, height / 2 + 250);
  textAlign(CENTER, CENTER);
  noStroke();
  textSize(24);
  text("A heap of star", 10, 5);

  textSize(18);
  fill(190);
  text("Wait..", 10, 30);
  pop();
}

function draw() {
  // background(0, 0, 0, 20);
  push();
  translate(width / 2, height / 2);

  v = p5.Vector.random2D();
  v.mult(random(100, 200));

  strokeWeight(1);
  stroke(255, 255, 200, 100);
  line(0, 0, v.x, v.y);
  pop();

  push();
  // mouse;
  noCursor();
  pop();
}
