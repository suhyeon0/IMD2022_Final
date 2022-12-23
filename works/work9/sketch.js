let particles = [];
const num = 1000;

const noiseScale = 0.0001;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");

  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  stroke(250, 250, 200);
  strokeWeight(1.5);
}

function draw() {
  background(0, 10);

  // push();
  // // mouse;
  // noCursor();
  // noStroke();
  // fill(255, 255, 200, 200);
  // circle(mouseX, mouseY, 20);
  // pop();

  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }

  pop();

  push();
  fill(255);
  noStroke();
  translate(width / 2, height / 2 + 250);
  textAlign(CENTER, CENTER);

  textSize(24);
  text("The flow of stars", 10, 5);

  textSize(18);
  fill(190);
  text("Scroll the mouse", 10, 30);
  pop();

  push();
  // mouse;
  noCursor();
  pop();
}

function mouseWheel() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
