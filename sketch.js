
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,treeImg;
var boy, boyImg,stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var slingshot;
var detectCollision



function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png");
	treeImg=loadImage("Plucking mangoes/tree.png");
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	stone = new Stone(40,500,23);

	mango1 = new Mango(550,290,34);
	mango2 = new Mango(730,325,35);
	mango3 = new Mango(670,280,35);
	mango4 = new Mango(730,400,35);
	mango5 = new Mango(550,390,36);
	mango6 = new Mango(640,410,35);
	mango7 = new Mango(490,390,35);
	mango8 = new Mango(610,340,36);
	mango9 = new Mango(780,350,35);

	slingshot = new Slingshot(stone.body,{x:80,y:550});

	tree=createSprite(640,455);
	tree.addImage(treeImg);
	tree.scale=0.38;

	boy=createSprite(150,610);
	boy.addImage(boyImg);
	boy.scale=0.125;	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
   

  drawSprites();

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  slingshot.display();
  
  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:80,y:550})
		slingshot.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	stoneBodyPosition = lstone.body.position;
	mangoBodyPosition = lmango.body.position;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lmango.r + lstone.r){
	  Matter.Body.setStatic(lmango.body, false);
	}
  
  }