function setup() {
  angleMode(DEGREES);
  rectMode(CENTER);
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

function draw() {
  background(0);

  push();
  stroke(255);

  fill(255, 255, 200, 100);

  translate(width / 2, height / 2);

  beginShape();

  var n = 3;

  if (mouseIsPressed === true) {
    n = n + 2;
  }

  for (var re = 0; re < n; re++) {
    for (var i = 0; i < 359; i++) {
      rotate(sin(frameCount + i * 2) * 50);
      var r1Min = map(sin(frameCount), -1, 1, 50, 100);
      var r1Max = map(sin(frameCount), -1, 1, 100, 0);

      var r2Min = map(sin(frameCount / 2), -1, 1, 100, 50);
      var r2Max = map(sin(frameCount), -1, 1, 0, 100);

      var r1 = map(sin(i * n), -1, 1, r1Min, r1Max);
      var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
      var r = r1 + r2;
      var x = r * cos(i);
      var y = r * sin(i);
      vertex(x, y);
    }

    drawingContext.filter = "blur(10px)";
    endShape(CLOSE);
  }
  pop();

  push();
  // mouse;
  noCursor();
  noStroke();
  fill(255, 255, 200, 200);
  circle(mouseX, mouseY, 20);
  pop();

  push();
  noStroke();
  fill(255);
  translate(width / 2, height / 2 + 250);
  textAlign(CENTER, CENTER);

  textSize(24);
  text("Flower of star", 10, 5);

  textSize(18);
  fill(190);
  text("Press the mouse", 10, 30);
  pop();
}
