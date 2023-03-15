let gridSize = 20;
let circleRadius = 30;
let colors = ["#250c2f", "#2e0f3b", "#371446", "#3e154f", "#4b1a60"];

let angle = 0;

function setup() {
  createCanvas(600, 600);
  frameRate(24);
}

function draw() {
  draw_one_frame(frameCount);
}

function draw_one_frame(cur_frac) {
  ellipseMode(RADIUS);
  stroke(0);
  strokeWeight(1);

  noFill();
  fill("#1e1e24");
  ellipse(width / 2, height / 2, width / 2, height / 2);
  noFill();
  stroke("#e8edfa");
  strokeWeight(10);
  ellipse(width / 2, height / 2, width / 2, height / 2);
  noFill();
  stroke(0);
  strokeWeight(5);
  
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      if (dist(x, y, width / 2, height / 2) < width / 4) {
        continue;
      }

      let colorIndex = floor(frameCount / 2) % colors.length;
      let color1 = colors[(colorIndex + int((x + y) / 40)) % colors.length];
      let color2 = colors[(colorIndex + int((x + y) / 40) + 1) % colors.length];

      noFill();
      stroke(lerpColor(color(color1), color(color2), (frameCount % 2) / 2));
      push();
      translate(x + gridSize / 2, y + gridSize / 2);
      rotate(atan2(height / 2 - y, width / 2 - x));
      ellipse(0, 0, circleRadius, circleRadius);
      pop();
    }
  }

  noFill();
  stroke("#e8edfa");
  strokeWeight(40);
  rect(0, 0, width, height);
}
