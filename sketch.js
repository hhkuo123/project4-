var timeToLoadNewPage = false;

var clickCounter = 0;
var showImage = false;
let currentImage = 0;
let totalImages = 4;
var imageArray = [];
var clickLocations = [];
var text1 = 'In you a star is born and'
var text2 = 'You cut a perfect form and'
var text3 = 'Someone forever warm'

function preload() {
  imageArray[0] = loadImage('img/star1.png');
  imageArray[1] = loadImage('img/star2.png');
  imageArray[2] = loadImage('img/star3.png');
  imageArray[3] = loadImage('img/star4.png');
  
}


function setup() {
  textAlign(CENTER);
  textSize(30);
  colorMode(HSL);
  createCanvas(800, 600);
  imageMode(CENTER);
  textFont('Franklin Gothic');
 
}

function draw() {
  background(220);
  //  backgroundColor = map(mouseY,0,height,50, 4);
  // background(backgroundColor,0,100);
  fill('red');
   text('In you a star is born and',width/2,height/7);
   text('You cut a perfect form and',width/2,height/5.5);
  text('Someone forever warm',width/2,height/4.5);
  
  showImage = true;
  image(imageArray[currentImage], width/2,height/2,100,100);
  

  
  for (let i = 0; i < clickLocations.length; i++) {
    // Display the text 'mouse click here' at each stored click position
    text('lay on', clickLocations[i][0], clickLocations[i][1]);
  }
  
   if(mouseY > height-20){
    timeToLoadNewPage = true;
  }
  
  //this loads a new page when your condition is met. The link goes into the quotes. Only works with relative internal links (e.g. page2.html) Won't work with external links (e.g. youtube.com)
  
  if (timeToLoadNewPage){
    window.location.href="link to next page here";
  }
  
}

function mouseClicked(){
  if (clickLocations.length < 6) {
    clickLocations.push([mouseX, mouseY]);
  }
}

function mousePressed() {

  if(currentImage < imageArray.length-1){
    currentImage +=1;
  }
  
}
