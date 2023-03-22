// Declare and initialize variables
let gridSize = 20;
let circleRadius = 30;
let colors = ["#e0fbfc", "#c2dfe3", "#9db4c0", "#5c6b73"];

// Declare variables for animation
let angle = 0;
let circleYPos = 0;

// Set up canvas
function setup() {
  createCanvas(600, 600);
  frameRate(24);
}

// Continuously draw frames
function draw() {
  // Call a function to draw a single frame
  draw_one_frame(frameCount);
}

// Draw a single frame
function draw_one_frame(cur_frac) {
  // Set up ellipse properties
  ellipseMode(RADIUS);
  stroke(0);
  strokeWeight(1);

  // Draw outer and inner circles
  noFill();
  fill("#253237");
  ellipse(width / 2, height / 2, width / 2, height / 2);
  noFill();
  stroke("#7f5539");
  strokeWeight(10);
  ellipse(width / 2, height / 2, width / 2, height / 2);

  // Loop through grid
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      // Skip grid squares inside the inner circle
      if (dist(x, y, width / 2, height / 2) < width / 4) {
        continue;
      }

      // Choose colors for stroke
      let colorIndex = floor(frameCount / 2) % colors.length;
      let color1 = colors[(colorIndex + int((x + y) / 40)) % colors.length];
      let color2 = colors[(colorIndex + int((x + y) / 40) + 1) % colors.length];

      // Draw ellipse with stroke gradient
      noFill();
      stroke(lerpColor(color(color1), color(color2), (frameCount % 2) / 2));
      push();
      translate(x + gridSize / 2, y + gridSize / 2);
      rotate(atan2(height / 2 - y, width / 2 - x));
      ellipse(0, 0, circleRadius, circleRadius);
      pop();

      // Draw circles on the sides
      if (x === 120 || x === width - 120) {
        noStroke();
        fill(0, 0, 255);
        circle(x, circleYPos, 10);
      }
    }
  }

  // Draw a rectangle and lines
  noFill();
  stroke("#253237");
  strokeWeight(40);
  rect(0, 0, width, height);
  line(120, 0, 120, height);
  line(width - 120, 0, width - 120, height);

  // Animate circle Y position
  circleYPos = map(sin(frameCount / 24 * PI), -1, 1, 0, height);
}







