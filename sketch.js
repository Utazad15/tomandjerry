var bgImg;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var cat,catImg1,catImg2,catImg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,610);
    cat.addAnimation("catImg1",catImg1);
    cat.addAnimation("catImg2",catImg2);
    cat.addAnimation("catImg3",catImg3);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseImg1",mouseImg1);
    mouse.addAnimation("mouseImg2",mouseImg2);
    mouse.addAnimation("mouseImg3",mouseImg3);
    mouse.scale = 0.2;
    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    
    keyPressed();

    if(cat.isTouching(mouse))
    {
       cat.changeAnimation("catImg3",catImg3);
       cat.velocityX = 0;
       mouse.changeAnimation("mouseImg3",mouseImg3);
    }

    cat.setCollider("rectangle",0,0,50,50);
         
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
      cat.changeAnimation("catImg2",catImg2);
      cat.velocityX = -5;
      mouse.changeAnimation("mouseImg2",mouseImg2);
      mouse.frameDelay = 25;
  }
}