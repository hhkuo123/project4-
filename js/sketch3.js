var timeToLoadNewPage = false;

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER);
  textSize(100);
  imageMode(CENTER);
  textFont('Franklin Gothic');
}

function draw() {
  background(220);
// Climb onto your seahorse and
// This ride is right on course
// This is the way I wanted it to be with you
// This is the way I knew that it would be with you
// Lay on, lay on, lay on, lay on
// Lay on, lay on, lay on, lay on')
    fill('red');
    text('LOVE',width/2,height/2);
  if(keyIsPressed){
    textSize(100);
    fill('lightblue');
      text('Show \n \n with no remose and', 200, 200);
    noLoop();
  }
  
   if(mouseY > height-20){
    timeToLoadNewPage = true;
  }
  
  //this loads a new page when your condition is met. The link goes into the quotes. Only works with relative internal links (e.g. page2.html) Won't work with external links (e.g. youtube.com)
  
  // if (timeToLoadNewPage){
  //   window.location.href="link to next page here";
  // }
  
}