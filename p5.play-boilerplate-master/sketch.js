var moving
var fixed

function setup() {
  createCanvas(800,800);
  fixed=createSprite(400, 700, 50, 50);
  moving=createSprite(400,200,20,20)
  test=createSprite(400,500,50,50)
  fixed.velocityY=-8
  moving.velocityY=8
test.velocityY=-8
}




function draw() {
  background(255,255,255); 
 //moving.x=mouseX
 //moving.y=mouseY
  
if(BounceOff(moving,fixed)) {
  fixed.velocityY=8
  moving.velocityY=-8
}
if(BounceOff(moving,test)) {
  moving.velocityY=-8
  test.velocityY=8
}



  
  drawSprites();
}



function BounceOff(object1,object2) {
if(object1.x-object2.x<object1.width/2+object2.width/2
  &&object2.x-object1.x<object2.width/2+object1.width/2
  &&object1.y-object2.y<object1.height/2+object2.height/2
  &&object2.y-object1.y<object2.height/2+object1.height/2) {
return true
  }
}