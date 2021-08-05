var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png");
 seaImage=loadImage("sea.png"); 

}
function setup() {
  createCanvas(600,300);
  
  ship=createSprite(70,180,20,20)
  ship.addAnimation("ship-1",shipImg)
ship.scale=0.2
sea=createSprite(10,200,600,10);
sea.x=sea.width/2
sea.velocityX=-2;

}
function draw() {
  
  background(seaImage)
  if (keyDown("space")) {
  ship.velocityY = -10;
}


if (keyDown("right")){
  ship.velocityX = 3;
}

if (keyDown("left")){
  ship.velocityX = 6;
}

ship.velocityY = ship.velocityY + 0.8

if (sea.x < 0) {
  sea.x = sea.width / 2;
}

ship.collide(sea);
drawSprites() 
  
}  
  