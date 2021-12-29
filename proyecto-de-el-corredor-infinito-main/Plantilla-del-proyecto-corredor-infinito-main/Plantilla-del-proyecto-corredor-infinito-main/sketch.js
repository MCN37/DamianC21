var asteroide1, asteroide2, asteroide3 , asteroidesGroup ;
var cohete, coheteImg;
var fondo;


function preload(){

 asteroide1 = loadImage("asteroide1.png");
 asteroide2 = loadImage("asteroide2.png");
 asteroide3 = loadImage("asteroide3.jpg");

 coheteImg = loadImage("cohete.png");

 fondo = loadImage("images.jpg")


}

function setup() {
    createCanvas(600, 800)

    cohete = createSprite(300, 500)
}

function draw() {

    drawSprites();
 
}