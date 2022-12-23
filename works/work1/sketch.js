function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(255);
}

function draw() {
  background(0, 0, 0, 10);

  push();
  translate(mouseX, mouseY);

  v = p5.Vector.random2D();
  v.mult(random(200, 100));

  // strokeWeight(1);
  // stroke(255, 100);

  noStroke();
  fill(255, 255, 200);
  ellipse(0, 0, v.x, v.y);
  pop();

  push();
  fill(255);
  noStroke();
  translate(width / 2, height / 2 + 250);
  textAlign(CENTER, CENTER);

  textSize(24);
  text("Round star", 10, 5);

  textSize(18);
  fill(190);
  text("Move the mouse", 10, 30);
  pop();

  push();
  // mouse;
  noCursor();
  pop();
}
