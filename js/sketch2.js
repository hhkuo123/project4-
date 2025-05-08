var timeToLoadNewPage = false;

var circleX = 200;
var circleY = 200;
var colorOffset = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  textSize(30);
  imageMode(CENTER);
  textFont('Franklin Gothic');
  img = loadImage('img/canyon.jpeg');
  
}

function draw() {
  background(220);
   
    drawSky();
  fill("yellow");
  // Use updated circleX and circleY
  circle(circleX*2, circleY+50, 100);
  image(img,width/2,height/2,width,height);
  fill(135+colorOffset, 206+colorOffset, 235+colorOffset);
  text('Way upon the mountain, where she died', width/2, height/6);
  
  text('All I ever wanted was your life', width/2, height/4.5);
  fill(255, 204, 153);
  text('Deep inside the canyon, I cant hide', width/2, height/3.5+colorOffset);
  
   if (circleY <= 50) { // 50 = radius/2 + a little buffer
    fill('red');
    text("All I ever wanted was your life", width/2, height-150);
  }
  
   if(mouseY > height-20){
    timeToLoadNewPage = true;
  }
  
  //this loads a new page when your condition is met. The link goes into the quotes. Only works with relative internal links (e.g. page2.html) Won't work with external links (e.g. youtube.com)
  
  // if (timeToLoadNewPage){
  //   window.location.href="link to next page here";
  // }
  
}


function keyPressed() {
  if (keyCode == 38) {       // UP arrow
    circleY -= 30;
    colorOffset-=10;
  }
}

function drawSky() {
  for (let y = 0; y < height / 2; y++) {
    let inter = map(y, 0, height / 2, 0, 1);
    let c = lerpColor(color(135, 206, 235), color(255, 204, 153), inter);
    stroke(c);
    line(0, y, width, y);
  }
}