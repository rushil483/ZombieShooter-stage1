var player
var shooterImage,shooter_shootingImage
var bg,bgImage

function preload(){
  shooterImage = loadImage("assets/shooter_1.png");
  shooter_shootingImage = loadImage("assets/shooter_3.png")
  bgImage = loadImage("assets/bg.jpeg")
}
function setup(){
  createCanvas(windowWidth,windowHeight)

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImage);
  bg.scale = 1.1;

  player = createSprite(displayWidth-1150,displayHeight-300,50,50);
  player.addImage(shooterImage)
  player.scale = 0.3;
}

function draw(){
  background("black");

  if(keyDown(UP_ARROW)){
    player.y = player.y-30;
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+30;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-30;
  }

  if(keyDown(DOWN_ARROW)){
    player.y = player.y+30;
  }

  if(keyWentDown("space")){
    player.addImage(shooter_shootingImage)
  }

  if(keyWentUp("space")){
    player.addImage(shooterImage)
  }
  drawSprites();
}