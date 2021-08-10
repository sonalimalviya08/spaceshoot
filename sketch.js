 var database;
 var player,playerCount;
 var background1,bullet,bulletGroup;
 var bgImg,laserImg,spaceship1Img,spaceship2Img;
 var bg,laser,spaceship1,spaceship2;
 var gameState = 0;
 var health=100
 var healthbar;
 var score=0
 var bulletGrp;
 
 function preload(){
bgImg = loadImage("images/bg.png")
laserImg = loadImage("images/laser.jpg")
spaceship1Img = loadImage("images/spaceship1.png")
spaceship2Img = loadImage("images/spaceship2.png") 
}

function setup() {
  createCanvas(displayWidth,displayHeight-100);
  background1 = createSprite(displayWidth/2+50,displayHeight)
  background1.addImage(bgImg)
  background1.scale = 2.3
  spaceship1 = createSprite(displayWidth/2+500,displayHeight/2)
  spaceship1.addImage(spaceship1Img)
  spaceship1.scale = 0.1;
  spaceship2 = createSprite(displayWidth/2-500,displayHeight/2)
  spaceship2.addImage(spaceship2Img)
  spaceship2.scale = 0.35;
  bulletGrp = new Group();
  healthbar = createSprite(windowWidth/2 + 100, 40, 100, 20);
  healthbar.shapeColor = "red";
spaceship2.debug=true
}

function draw() {
  background(0)
  console.log(healthbar.width)

    if(keyIsDown(RIGHT_ARROW)){
    spaceship1.x = spaceship1.x+3;
    }
   
      if(keyIsDown(LEFT_ARROW)){
        spaceship1.x = spaceship1.x-3;
        }
        if(keyIsDown(UP_ARROW)){
          spaceship1.y = spaceship1.y-4;
          }
          if(keyIsDown(DOWN_ARROW)){
            spaceship1.y= spaceship1.y+4;
            }

            if(keyDown("D")){
              spaceship2.x = spaceship2.x+3;
              }
             
                if(keyDown("A")){
                  spaceship2.x = spaceship2.x-3;
                  }
                  if(keyDown("W")){
                    spaceship2.y = spaceship2.y-4;
                    }
                    if(keyDown("S")){
                      spaceship2.y= spaceship2.y+4;
                      }
  background1.velocityX = -4
                   
  if(background1.x<0){
background1.x =  width/12
  }    
  if(keyDown("space")){
    bullet = createSprite(spaceship1.x, spaceship1.y, 5, 10);
    bullet.shapeColor = "red";
bullet.velocityX=-5
    //bullet.setSpeedAndDirection(8, spaceship1.rotation - 90);
//bullet.rotation = spaceship1.rotation - 90;
    bullet.lifeTime = 100;
    bullet.addImage(laserImg);
    bullet.scale = 0.2;
bulletGrp.add(bullet);

    //shootingSound.play();
  }
  
if(bulletGrp.isTouching(spaceship2)){
//health=health-.4;
  healthbar.width=healthbar.width-20
  //healthbar.x=windowWidth/2+100+health/2
  spaceship2.destroy()
  bulletGrp.destroyEach()
  score+=1
}

if(health<=0){
  health=0
}
  drawSprites()
  text("score"+score,50,50)
  text (" Health% "+health,800,50)

}