// agregar prueba de que se salvo
var pisoteado
var trex ,trex_running;
var piso
var pisosinver
var TDS
var gameState = PLAY
var PLAY = 1
var END = 0
console.info
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  pisoteado = loadImage("ground2.png")
  cacti = loadImage("obstacle1.png")
  cacti2 = loadImage("obstacle2.png")
  cacti3 = loadImage("obstacle3.png")
  cacti4 = loadImage("obstacle4.png")
  cacti5 = loadImage("obstacle5.png")
  cacti6 = loadImage("obstacle6.png")
  WAA = loadImage("cloud.png")
  restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")
  trexqyanopudomas = loadImage("trex_collided.png")
}

function setup(){
  createCanvas(600,200)
  trex = createSprite(50,160,20,50)
  piso = createSprite(200,190, 400,20)
  pisosinver = createSprite(200,198, 400,20)
  pisosinver.visible = false
  //crear sprite de Trex
trex.addAnimation("runningInThe90s",trex_running) 
trex.addAnimation("nombreoriginal",trexqyanopudomas)
trex.scale = 0.5
piso.addImage(pisoteado)
var TDS = Math.round(random(1,100))
console.log("el numero de bosses que vas a tener es:"+TDS)
restart = createSprite(300,140);
restart.addImage(restartImg);
gameOver = createSprite(300,100);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.5; 
restart.scale = 0.5;
obstaclesGroup = createGroup();
cloudsGroup = createGroup();
trex.setCollider("circle",0,0,50)
trex.debug = false
}
function draw(){
  background("blue")
  trex.velocityY = trex.velocityY + 0.5
  piso.velocityX = -12
  if(gameState === PLAY){
  
  trex.collide(pisosinver)
  if (keyWentDown("space")&&trex.y>100){
  trex.velocityY = -10
  }
  if (piso.x < 0){
    piso.x = piso.width/2
    //lag
  }
  RandomClouds();
  spike();
  console.log("START")  
}

if(obstaclesGroup.isTouching(trex)){
  gameState = END; 
}
  if (gameState === END){
   ground.velocityX = 0;
   gameOver.visible = true;
   restart.visible = true;
   obstaclesGroup.setVelocityXEach(0);
   trex.changeAnimation("nombreoriginal", trexqyanopudomas)
   cloudsGroup.setVelocityXEach(0);
   console.log = FIIIIIIIIIIIN
 }
// jokkkkkkkkkk 
  drawSprites();
   }

function RandomClouds (){
  if (frameCount %60 === 0){
    nube = createSprite (600, 100, 40, 10)
    nube.addImage(WAA) 
    nube.scale = 0.5
    nube.velocityX = -3
    nube.y = Math.round(random(10,60))
    console.log("este es la profundidad de trex"+trex.depth,"y esta es la de las nubes" +nube.depth)
  nube.depth = trex.depth
  trex.depth = trex.depth + 1
  nube.lifetime = 400
  cloudsGroup.add(nube);
  }
}
function spike(){
  if (frameCount %60 === 0){
    var cactus = createSprite(600, 160,10,40)
    cactus.velocityX = -4
    var ania =   Math.round(random(1,6))
    switch(ania){
      case 1: cactus.addImage(cacti);
       break; 
      case 2: cactus.addImage(cacti2);
       break; 
      case 3: cactus.addImage(cacti3);
       break; 
      case 4: cactus.addImage(cacti4);
       break; 
      case 5: cactus.addImage(cacti5);
       break; 
      case 6: cactus.addImage(cacti6);
       break;
       default: break;
    }
    cactus.scale = 0.5;
    cactus.lifetime = 400;
    obstaclesGroup.add(cactus)
  }   
}