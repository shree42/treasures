var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var gameOver,gameOverImg;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameOverImg =loadAnimation("gameOver.png");
  
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);



//creating boy running
  
  boy=createSprite(width/2,height-20,20,20);
  boy.addAnimation("boyImg",boyImg);
  boy.scale=0.1;
  
  gameOver=createSprite(width/2,height/2,20,20);
  gameOver.addAnimation("gameOver",gameOverImg);
  gameOver.visible=false;
  
  cashG=new Group();
  diamondsG=new Group();
  jwelleryG= new Group();
  swordGroup=new Group();
 

}

function draw() {
  
  
  
  
  background(0);
  
  
   
        
      
     
   
  if(gameState===PLAY){
    path.velocityY = 4;
    if (frameCount % 60 === 0){
     var rand = Math.round(random(1,4));
     switch(rand){
       case 1:spawnCash();
         break;
         case 2:spawnDiamonds();
         break;
         case 3:spawnJwellery();
         break;
         case 4:spawnSwords();
         break;}
    
    
  }
    if(boy.isTouching(cashG)){
      cashG.destroyEach();
      treasureCollection=treasureCollection+40;
    }
    if(boy.isTouching(diamondsG)){
       diamondsG.destroyEach();
      treasureCollection=treasureCollection+60;
    }

    if(boy.isTouching(jwelleryG)){
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+50;
      
    }
    if(path.y>height){
    path.y=height/2;
  }
  boy.x=mouseX;
  }
  
  if(gameState===END){
    path.velocityY=0;
    cashG.velocityY=0;
    jwelleryG.velocityY=0;
    diamondsG.velocityY=0;
    swordGroup.velocityY=0;
    swordGroup.destroyEach();
    cashG.setLifetimeEach(-1);
    jwelleryG.setLifetimeEach(-1);
    diamondsG.setLifetimeEach(-1);
    gameOver.visible=true;
  }
  
  if(boy.isTouching(swordGroup)){
    gameState=END;
  }
  drawSprites();
  text("treasure:"+treasureCollection,height/3,width/10);
  
  
  


  
}

function spawnCash(){
  
   var cash=createSprite(Math.round(random(50,width-50)),0)
   cash.velocityY=4;
  cash.addImage(cashImg);
  cash.scale=0.2;
  cash.lifetime=170
  
  cashG.add(cash);
  
  }
function spawnDiamonds(){
  var diamonds =createSprite(Math.round(random(50,width-50)),0);
  diamonds.velocityY=4;
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.05;
  diamonds.lifetime=170;
  diamondsG.add(diamonds);
}
function spawnJwellery(){
  var jwellery=createSprite(Math.round(random(50,width-50)),0);
  jwellery.velocityY=4;
  jwellery.addImage(jwelleryImg);
  jwellery.lifetime=170
  jwellery.scale=0.2;
  jwelleryG.add(jwellery);
}
function spawnSwords(){
  var sword=createSprite(Math.round(random(50,width-50)),0);
  sword.velocityY=4;
  sword.addImage(swordImg);
  sword.lifetime=170;
  sword.scale=0.2;
  swordGroup.add(sword);
}


