let img;
let text1Position;
let text2Position;

function preload() {
  img = loadImage('img/bg.jpeg'); // Load image before setup
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textSize(30);
  imageMode(CENTER);
  textFont('Franklin Gothic');
}

function draw() {
  text1Position = map(mouseX, 0, width / 2, 175, 225);
  text2Position = map(mouseX, 0, width / 2, 50, 300);

  background(text2Position, text1Position); // Set background color first
  tint(255, 150); // Slightly transparent
  image(img, width / 2, height / 2);
 

  fill('red');
  text('This is the way I wanted it to be with you', text1Position, 50);
  fill('lightblue');
  text('This is the way I knew that it would be with you', text2Position, 350);
  
    if (mouseX > width / 2) {
    textSize(100); // 
    fill('black');
    text('lay on', width / 2, height - 50);
    textSize(30); 
  }
}
