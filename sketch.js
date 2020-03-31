function setup() {
  createCanvas(1200,800);
  fixedRect  = createSprite(400, 100, 50, 80);
  //fixedRect  = createSprite(600, 400, 50, 80);
  fixedRect.shapeColour = "green";

  movingRect = createSprite(400,800,80,30);
  //movingRect = createSprite(400,200,80,30);
  movingRect.shapColour = "green";
  
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
  
  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;
}

function draw() {
  background(255,255,255);

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  
  if(bounceOff(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}
