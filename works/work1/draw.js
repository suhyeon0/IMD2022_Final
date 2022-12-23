class Walker {
  constructor(x, y) {
    this.pos = createVector(mouseX, mouseY);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
  }
  update() {
    this.pos.add(this.vel);
  }

  show() {
    // stroke(255);
    // strokeWeight(1);
    fill(255, 10);
    triangle(this.pos.x, this.pos.y, 32);
  }
}
