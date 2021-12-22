var fundoImg
var meninoImg
var fundo
var menino

function preload(){
  fundoImg = loadImage("path.png")
  meninoImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  fundo = createSprite(200,200)
  menino = createSprite(200,300,40,30)
  fundo.addImage(fundoImg)
  menino.addAnimation("correndo",meninoImg)
  menino.scale = 0.1
  fundo.velocityY = 10
}

function draw() {
  background(0);

  if (fundo.y > 400 ){
    fundo.y = height/2;
  }

  menino.x = mouseX
  drawSprites();
}
