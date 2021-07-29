var space;
var spaceImg;
var spacecraft1,spacecraftImg;
var spacecraft2,spacecraftImg;
var spacecraft3,spacecraftImg;
var spacecraft3,spacecraftImg;

function preload(){
  backgroundImg = loadImage("images/spacebg.jpg");
  spacecraft1 = loadImage("images/spacecraft1.png");
  spacecraft2 = loadImage("images/spacecraft2.png");
  spacecraft3 = loadImage("images/spacecraft3.png");
  spacecraft4 = loadImage("images/spaceecraft4.png");

}

function setup() {
  createCanvas(800,400);
 
    spacecraft1 = createSprite(400,180,800,20);
    spacecraft1.addImage("spacecraft1",spacecraftImage);
    spacecraft1.scale = 0.5
  
    spacecraft2 = createSprite(400,180,800,20);
    spacecraft2.addImage("spacecraft2",spacecraftImage);
    spacecraft2.scale = 0.5
  
    spacecraft3= createSprite(400,180,800,20);
    spacecraft3.addImage("spacecraft3",spacecraftImage);
    spacecraft3.scale = 0.5
  
    spacecraft4 = createSprite(400,180,800,20);
    spacecraft4.addImage("spacecraft4",spacecraftImage);
    spacecraft4.scale = 0.5
  
    hasDocked.visible = false;

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  if(!hasDocked){
    if(keyDown(RIGHT_ARROW)){
      updateHeight(-0,10)
      spacecraft1.addAnimation("spacecraft1",spacecraftImage1);
    }
    if(keyDown(LEFT_ARROW)){
      updateHeight(-0,10)
      spacecraft2.addAnimation("spacecraft2",spacecraftImage2);
    }
    if(keyDown(UP_ARROW)){
      updateHeight(-0,10)
      spacecraft3.addAnimation("spacecraft3",spacecraftImage3);
    }
    if(keyDown(DOWN_ARROW)){
      updateHeight(-0,10)
      spacecraft4.addAnimation("spacecraft4",spacecraftImage4);
    }
    hasDocked.visible = True; 
  }
  drawSprites();
}