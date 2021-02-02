var mr,fr;

function setup() {
  createCanvas(400,400);
  // createSprite(400, 200, 50, 50);

  fr = createSprite(200,200,60,50);
  mr = createSprite(50,50,60,50);

  fr.shapeColor = 'green';
  mr.shapeColor = 'green';
}

function draw() {
  background(0);  

  mr.x = World.mouseX;
  mr.y = World.mouseY;

  if(mr.x - fr.x < (mr.width + fr.width)/2 && fr.x - mr.x < (mr.width + fr.width)/2 && mr.y - fr.y < (mr.height + fr.height)/2 && fr.y - mr.y < (mr.height + fr.height)/2){
    fr.shapeColor = 'red';
    mr.shapeColor = 'red';
  }else{
    fr.shapeColor = 'green';
    mr.shapeColor = 'green';
  }
  drawSprites();
}