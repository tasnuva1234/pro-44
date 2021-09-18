//enemy1 = yellow enemy
//enemy2 = red enemy
//enemy3 = white enemy

var shooter
var bullet;
var enemy1;
var enemy1_2
var enemy2;
var enemy2_1;
var enemy3;
var enemy3_1;
var score=0;
var time;


function preload(){
  bgImg = loadImage("1188236.jpg");
  shooterImg = loadImage("shooter.png")
  bulletImg = loadImage("bullet.png")
  enemy1Img = loadImage("enemy1.png")
  enemy2Img = loadImage("enemy2.png")
  enemy3Img = loadImage("enemy3.png")
}

function setup() {
  createCanvas(700,600);

  //For creating hte shooter sprite
  shooter = createSprite(100,500,50,50);
  shooter.addImage(shooterImg);
  shooter.scale = 0.5;

  //For creating the enemy2
  enemy2 = createSprite(270,190,50,50);
  enemy2.addImage(enemy2Img);
  enemy2.scale = 0.5;

  enemy2_1 = createSprite(400,190,50,50);
  enemy2_1.addImage(enemy2Img);
  enemy2_1.scale = 0.5;

  //For creating the enemy3
  enemy3 = createSprite(85,200,50,50);
  enemy3.addImage(enemy3Img);
  enemy3.scale = 0.5;

  enemy3_1 = createSprite(630,200,50,50);
  enemy3_1.addImage(enemy3Img);
  enemy3_1.scale = 0.5;

  //For creating the bullet group
  bulletGroup = createGroup();  
  enemy1Group = createGroup();


}

function draw() {
  background(bgImg); 
  drawSprites();

  //For moving the shooter according to the mouse
  shooter.x = mouseX;
  
  //To spawn the bullets
  spawnBullets();
  //To spawn the enemy1
  verticalenemy1();

  //For showing the score
  textSize(20);
  fill("white")
  text("Score:"+score,500,30);

  //To destroy the enemy if bullet is touched
  if(bulletGroup.isTouching(enemy1Group)){
    enemy1Group.destroyEach();
    score++
  }

 


}

function spawnBullets(){
  if(frameCount % 20 === 0){
    bullet = createSprite(100,500,50,50);
    bullet.addImage(bulletImg);
    bullet.scale = 0.5;
    bullet.velocityY = -10;
    bulletGroup.add(bullet);
    //To move the bullets according to the shooter
    bullet.x = shooter.x

  }
}

function verticalenemy1(){
  var i;
  for(i=1; i<=10; i++ ){
    enemy1 = createSprite(i*90+5,100, 50, 50)
    enemy1.addImage(enemy1Img);
    enemy1.scale = 0.5;  
    enemy1Group.add(enemy1)

    enemy1_2 = createSprite(i*90+5,280, 50, 50)
    enemy1_2.addImage(enemy1Img);
    enemy1_2.scale = 0.5; 
    enemy1Group.add(enemy1_2) ;
  }
}