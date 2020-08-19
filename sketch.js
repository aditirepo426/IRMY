//Global Variables                                           
var girl , girlImg , ground , backImg , health ,  backG ,count ;
var gameState = "PLAY";
var obstaclesGroup = new obstaclesGroup();
var lives = new Group();

function preload(){
  girlImg = loadAnimation("4.jpg", "3.jpg" ,"2.jpg" ,"1.jpg");
  backImg = loadImage("backk.jpg");
}


function setup() {
  createCanvas(displayWidth,displayHeight);

  
  backG = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  backG.addImage("track",backImg);
  backG.scale = 5.5;
  //backG.velocityX = -6;
 // backG.x = backG.width/2;
  
  ground = createSprite(300,220,600,10);
  ground.visible = false; 
  
  girl = createSprite(displayWidth/4-200,displayHeight/2+200,5,5);
  girl.addAnimation("g",girlImg);
  girl.scale = 1;
  girl.setCollider("circle",0,0,50);
  
}



function draw(){
  background(255); 
  
  if(gameState === PLAY ){

    if(keyDown("space") ){
    girl.velocityY = -20;
    }

    girl.velocityY = girl.velocityY +0.8;
    
      

    spawnObstacles();

    saveLife();
    
    if(obstaclesGroup.collide(girl)){
    gameState = END;
    }
  
  }
  
  if(gameState === END){
    girl.visible = false;
    
    backG.x = 300;
    backG.y = 150;
    
    obstaclesGroup.setVelocityXEach = 0;
    lives.setVelocityXEach = 0;
    
    obstaclesGroup.setLifetimeEach(-1);
    lives.setLifetimeEach(-1);
    
   // restart.visible = true; 
    //gameOver.visibble = true;
    
   // if(mousePressedOver(restart)){
    //   reset();
  //}
  }
  
  monkey.collide(ground);
  
  drawSprites();
  
  textSize(20);
  text("Health :" + count ,400,90);
  
}

function reset(){
  gameState = PLAY;
  //restart.visible = false;
  obstaclesGroup.destroyEach();
  lives.destroyEach();
  girl.visible = true;
  count = 0;
  
}

function spawnObstacles() {
  if(frameCount% 180 === 0) {
    obstacle = createSprite(600,230,10,40);
    obstacle.velocityX = - (4 + 3*count/100);
    obstacle.addAnimation("Stone",obstacleImg);
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
    obstaclesGroup.add(obstacle);
  }
}

function saveLife() {
  if(frameCount % 120 === 0) {
    banana = createSprite(400,320,40,10);
    banana.y = random(150,250);
    banana.addAnimation("Banana", bananaImg);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 200;
    lives.add(banana);
    
    
    }
  
}