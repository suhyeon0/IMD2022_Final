let gap = 5;
let angle = 0.1;
let w = 600;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  angleMode(DEGREES);
}

function draw() {
  background("black");
  // mouse;
  noCursor();
  noStroke();
  fill(255, 255, 200, 200);
  circle(mouseX, mouseY, 20);

  push();
  translate(width / 2, width / 2);
  let v = createVector(random(-200, 200), random(-200, 200));

  strokeWeight(0.5);
  stroke(255, 255, 200);
  line(0, 0, v.x, v.y);
  pop();

  // main star
  push();
  // rotate(angle);

  stroke(255, 255, 200);

  translate(width / 2, height / 2);

  angle += 0.01;
  angle = angle + mouseX * -0.00005;

  var end = 50;
  var start = 10;

  for (var r = 10; r <= 400; r = r + gap) {
    for (var i = start; i < end; i++) {
      var x = r * cos(i * angle);
      var y = r * sin(i * angle);
      point(x, y);
    }
  }

  pop();

  push();
  fill(255);
  noStroke();
  translate(width / 2, height / 2 + 250);
  textAlign(CENTER, CENTER);

  textSize(24);
  text("A trace of stars", 10, 5);

  textSize(18);
  fill(190);
  text("Move the mouseX", 10, 30);
  pop();
}
