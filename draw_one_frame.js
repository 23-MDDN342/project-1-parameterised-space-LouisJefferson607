let gridSize = 10;
let circleRadius = 20;
let colors = ["#e8edfa", "#d6e6f8", "#b4c2da", "#6f95a6", "#70725a"];
let angle = 0;

function draw_one_frame() {
  // Set the ellipse mode to RADIUS and stroke settings
  ellipseMode(RADIUS);
  stroke(0);
  strokeWeight(1);

  // Draw a purple ellipse in the background
  noFill();
  fill("#b4c2da");
  ellipse(width / 2, height / 2, width / 2, height / 2);
  noFill();
  stroke("#e8edfa");
  strokeWeight(10);
  ellipse(width / 2, height / 2, width / 2, height / 2);
  noFill();
  stroke(0);
  strokeWeight(1);
  
  // Loop through each row and column in the grid
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      // Skip drawing circles within the hole in the center of the screen
      if (dist(x, y, width / 2, height / 2) < width / 4) {
        continue;
      }

      // Calculate the color for this circle
      let colorIndex = floor(frameCount / 10) % colors.length;
      let color = colors[(colorIndex + int((x + y) / 40)) % colors.length];

      // Draw the circle with the perpendicular color gradient line
      noFill();
      stroke(color);
      push();
      translate(x + gridSize / 2, y + gridSize / 2);
      rotate(atan2(height / 2 - y, width / 2 - x));
      ellipse(0, 0, circleRadius, circleRadius);
      pop();
    }
  }

  // Draw a white border around the outside of the canvas
  noFill();
  stroke("#e8edfa");
  strokeWeight(40);
  rect(0, 0, width, height);
}
