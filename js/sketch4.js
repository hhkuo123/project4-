var timeToLoadNewPage = false;

let circleX = 100;
let circleY = 100;
let circleRadius = 40;
let isDragging = false;

let dropZoneX = 300;
let dropZoneY = 200;
let dropZoneSize = 200;

function preload() {
  img = loadImage('img/sea.png'); // Load image before setup
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textSize(30);
  imageMode(CENTER);
  textFont('Franklin Gothic');
}

function draw() {
  background(220);
  image(img, width / 2, height / 2,width/2,height/2); // Center the image
  fill('red'); // Optional: Set text color
  text('Climb onto your seahorse and \n This ride is right on course', width / 2, 100); // Centered text
  
   // Draw drop zone
  fill(0, 255, 0, 100);
  rect(dropZoneX, dropZoneY, dropZoneSize, dropZoneSize);

  // Draw draggable circle
  fill(100, 100, 255);
  ellipse(circleX, circleY, circleRadius * 2);

// Check if dropped in drop zone
  if (!isDragging && isInDropZone()) {
   window.location.href = "index5.html"; 
 }

  // Label
  fill(0);
  text("Drag the circle to the green box to go to next page", width/2, height/10);
  
  
}


function mousePressed() {
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < circleRadius) {
    isDragging = true;
  }
}

function mouseDragged() {
  if (isDragging) {
    circleX = mouseX;
    circleY = mouseY;
  }
}

function mouseReleased() {
  isDragging = false;
}

function isInDropZone() {
  return (
    circleX > dropZoneX &&
    circleX < dropZoneX + dropZoneSize &&
    circleY > dropZoneY &&
    circleY < dropZoneY + dropZoneSize
  );
}