function setup() {
  createCanvas(600, 600, WEBGL);

  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  background(0);
}

function draw() {
  background(0);

  //light
  pointLight(255, 255, 255, 0, 0, 200);
  ambientLight(100, 100, 0);

  //color
  fill(255, 255, 255, 120);
  noStroke();

  //repeat
  for (let j = 0; j < 70; j++) {
    push();
    for (let i = 0; i < 5; i++) {
      translate(
        sin(frameCount * 0.02 + j) * 50,
        sin(frameCount * 0.01 + j) * 100
      );

      rotateZ(frameCount * 0.009);

      push();
      sphere(5, 10, 10);

      pop();
    }
    pop();
  }
  push();
  // mouse;
  noCursor();
  pop();
}
