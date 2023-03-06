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


		/*
	translate(width/2, height/2);
	for(var i=0;i<15;i++){
		for(var k=0;k<20;k++){
			stroke(255,255,255);
		rotate(PI / 12.0);
		fill(255,255-i*10,255-k*10);
		line(a%100,b%100,x%300,y%300);
		ellipse((x+i*20)%width,(y+k*20)%height,i+4,i+4);
			drawtriangle((a-i*20)%width,(b-k*20)%height,k/8);
			rect(x%width, y%height, k+10, k+10);
			fill(0,i*10,255-k*10);
			ellipse((x-i*20)%width,(y-k*20)%height,i+3,i+3);
			rotate(PI / 24.0);
			fill(255-(i+k)*5,(i+k)*7,i*20);
			drawtriangle((a+i*20)%width,(b+k*20)%height,k/8);
			rect(a%width, b%height, k+5, k+5);
			drawflower(k,x);
			
		}
	}
	*/

	function drawtriangle(x,y,r){
		triangle(x, y, x+7*r, y-13.75*r, x+14*r, y);
	}

	function drawflower(i,k){
			if(i%2==1){
				fill(255,(k*0.4)%255,30);
				stroke(k%255,255,0);
				arc(0,0,150+i+150*sin(k*PI/24),150,0,PI / 40);
			}
			else{
				fill(k%255,0,255);
				stroke(0,(k*0.4)%255,255);
				arc(0,0,(100+100*cos(k*PI/24))%255,50,0,PI / 20);
			}
	}
