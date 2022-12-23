class Drop {
  constructor() {
    this.pos = createVector(random(width), 0);
    this.yspeed = random(0.1, 10);
  }

  update() {
    let g = 0.1;
    this.yspeed += g;
    this.pos.y += this.yspeed;

    if (this.pos.y > height || this.pos.y < -500) {
      this.pos = createVector(random(width), 0);
      this.yspeed = random(0.1, 10);
    }

    if (mouseIsPressed === true) {
      this.yspeed = 0.9;
      let g = -1;
      this.yspeed = this.yspeed * g;
    }
  }

  display() {
    stroke(255, 255, random(20, 255), random(75, 100));
    strokeWeight(1);
    line(this.pos.x, 0, this.pos.x, this.pos.y);
  }
}
