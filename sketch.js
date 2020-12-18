var bullet,wall;
var bulletWeight,bulletSpeed;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  
  bulletWeight = Math.round(random(30,52));
  bulletSpeed = Math.round(random(223,321));
  
  bullet = createSprite(50,200,20,50);
  bullet.velocityX= bulletSpeed;
  bullet.shapeColor="white";

  wall =createSprite(1200,200,60,height/2);
  wall.shapeColor=rgb(80,80,80);
 
thickness=Math.round(random(22,83));
}

function draw() {
  background(255,255,255);  
 
  
  if(collided(bullet,wall))
  {
    
    bullet.velocityX=0;
    damage= (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thickness*thickness*thickness);
  
  }
   if(damage>10)
  {
    wall.shapeColor="red";
  }
  else if(damage<10)
  {
    wall.shapeColor="green";
  }

drawSprites();
}

function collided(bulletP,wallP)
{
  bulletRightEdge=bulletP.x+bulletP.width;
  wallLeftEdge=wallP.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  else{
    return false;
  }
}