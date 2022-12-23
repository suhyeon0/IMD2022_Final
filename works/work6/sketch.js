let d = [],
  yspeed = false;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");

  for (var i = 0; i < width + 10; i++) {
    d[i] = new Drop();
  }
}

function draw() {
  background(0);

  for (let i = 0; i < d.length; i++) {
    d[i].update();
    d[i].display();
  }

  push();
  // background(0);
  // mouse;
  noCursor();
  noStroke();
  fill(255, 255, 200, 200);
  circle(mouseX, mouseY, 20);
  pop();

  push();
  fill(255);
  translate(width / 2, height / 2 + 250);
  textAlign(CENTER, CENTER);

  textSize(24);
  text("Falling the star", 10, 5);

  textSize(18);
  fill(190);
  text("Press the mouse", 10, 30);
  pop();
}
