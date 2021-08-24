var boy1,boy2,boy3,boy4,log,log2,stone;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
groundImg = loadImage("ground");
boy1Img = loadAnimation("boy1.png");
boy2Img = loadAnimation("boy2.png");
boy3Img = loadAnimation("boy3.png");
boy4Img = loadAnimation("boy4.png");

logImg = loadAnimation("log.png");
log2Img = loadAnimation("log2.png");
stoneImg = loadAnimation("stone.png");
}

function setup() {
 createCanvas(800,800);
 //Moving background
ground = creatSprite(100,150);
ground.addImage(groundImg);
ground.velocityX = -5;

//create boy running
boy = createSprite(70,150);
boy.addAnimation("boy1,boy2,boy3,boy4");
boy.scale=0.8;

//set obsetcle for boy
boy.setCollider ("circle",0,0,590);

gameOver = createSprite(400,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.4;
gameOver.visible = false; 

log = new Group();
log2 = new Group();
stone = new Group();
}

function draw() {
    background(0);
    drawSprites();
    textSize(20);
    fill(250);
    text("Distance: "+ distance,900,30);

    if(gameState===PLAY){


        distance = distance + Math.round(getFrameRate()/50);
   ground.velocityX = -(6 + 2*distance/150);
  
   boy.y = World.mouseY;
  
   edges= createEdgeSprites();

   boy.collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
//creating continous obstecles 
var select_obstecles = Math.round(random(1,3));
  
if (World.frameCount % 150 == 0) {
  if (select_obstecles == 1) {
    log();
  } else if (select_obstecles == 2) {
    log2();
  } else {
    stone();
  }
}
if(log.isTouching(boy)){
  gameState = END;
  by.velocityY = 0;
  boy.addAnimation("gameover");
 }
 if(log2.isTouching(boy)){
  gameState = END;
  boy.velocityY = 0;
  boy.addAnimation("gameover");
 }
 if(log.isTouching(boy)){
  gameState = END;
  by.velocityY = 0;
  boy.addAnimation("gameover");
 }
 if(stone.isTouching(boy)){
  gameState = END;
  boy.velocityY = 0;
  boy.addAnimation("gameover");
 }
}else if (gameState === END) {
  gameOver.visible = true;
  //Add code to show restart game instrution in text here
textSize(40)
text("Restart the game by pressing SPACE key",60,230)

//Add code boy to jump
if(keyDown("up"))
  jump()

ground.velocityX = 0;
boy.velocityY = 0;
boy.addAnimation("boy1,boy2,boy3,boy4");

log.setVelocityXEach(0);
    log.setLifetimeEach(-1);
  
    log2.setVelocityXEach(0);
    log2.setLifetimeEach(-1);
  
    stone.setVelocityXEach(0);
    stone.setLifetimeEach(-1);

//write condition for calling reset( )
if(keyDown("up")){
  reset()
}
}
}
function log(){
log =createSprite(1100,Math.round(random(50, 250)));
log.scale =0.06;
log.velocityX = -(6 + 2*distance/150);
log.addAnimation("obstcleLog",obstLogImg);
log.setLifetime=170;
log.add(log.png);
}
function log2(){
  log2 =createSprite(1100,Math.round(random(50, 250)));
  log2.scale =0.06;
  log2.velocityX = -(6 + 2*distance/150);
  log2.addAnimation("obstcleLog2",obstLog2Img);
  log2.setLifetime=170;
  log2.add(log2.png);
}
function stone(){
  stone =createSprite(1100,Math.round(random(50, 250)));
  stone.scale =0.06;
  stone.velocityX = -(6 + 2*distance/150);
  stone.addAnimation("obstcleStone",obstcleStoneImg);
  stone.setLifetime=170;
  stone.add(stone.png);
} 
//create reset function here
function reset(){
  gameState =PLAY;
  distance =0;
  gameOver.visible=false;
  boy.changeAnimation("BOYRunning",boy1Img);
  log.destroyEach()
  log2.destroyEach()
  stone.destroyEach()





    }