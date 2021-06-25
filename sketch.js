//variable for fairy sprite and fairyImg
var starImg,bgImg;
var star, starBody;
var fairy, fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
//images and sound is created
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fairySound = loadSound ("sound/joyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

//  fairyVoice sound
	fairySound .play ()

// fairy sprite and animation 
 fairy = createSprite(100,550)
 fairy.addAnimation("fairy",fairyImg)
 fairy.debug = false
 fairy.setCollider("rectangle",100,50,500,500)
 fairy.scale = 0.2

//star sprite and animation 
	star = createSprite(650,30,9,starBody);
	star.addImage(starImg);
	star.scale = 0.2;
	
    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
//backeground image is given
background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 


//the star stops  in the hand of fairy
    if(star.y> 490 && starBody.position.y >490){
	Matter.Body.setStatic (starBody,true)
}
  drawSprites();

}

function keyPressed() {
//if key pressed down arrow then the star come down
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

//if key pressed left or right arrow then the  fairy can move left and right
	
	if(keyCode === RIGHT_ARROW ){
		fairy.x = fairy.x + 30
	}

	if(keyCode === LEFT_ARROW ){
		fairy.x = fairy.x -30
	}
}
