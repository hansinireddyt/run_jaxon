var path 
var man

function preload(){
  //pre-load images
 manImage = loadAnimation ("Runner-1.png","Runner-2.png");
 
 pathImage = loadImage ("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
   path = createSprite (200,200,50,100);
  path.addImage (pathImage);
  path.scale = 1.1;
  path.y = height/2;
  

  man = createSprite (200,200,100,100);
  man.addAnimation ("Running",manImage);
  man.scale = 0.1;
  //man.velocityX = 4;

  invisiblePath = createSprite (0,200,400,20);
  invisiblePath.visible = false;

  invisiblePath = createSprite (400,200,400,20);
  invisiblePath.visible = false;
 }

 function draw() {
  background(0);
 
 
  if (path.y > 400) {
    path.y = height/2;

  }

  path.velocityY = 5;
 
  //man.bounceOff (invisiblePath);

 
  drawSprites ();
  
 
 
 
 
  
}
