
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var stone;
var boyImage, boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var constraint;

function preload()
{
	boyImage = loadImage("Plucking+mangoes/Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, height-10, width, 20);
	tree = new Tree(1000, 455, 100, 300)
	stone = new Stone(190, 580, 20);

	mango1 = new Mango(850, 400, 30);
	mango2 = new Mango(930, 340, 30);
	mango3 = new Mango(950, 250, 30);
	mango4 = new Mango(1020, 420, 30);
	mango5 = new Mango(1130, 400, 30);
	mango6 = new Mango(1050, 320, 30);
	mango7 = new Mango(1040, 225, 30);

	constraint = new Chain(stone.body, {x: 190, y:580})

	Engine.run(engine);
  
}


function draw()
{
  rectMode(CENTER);
  background(rgb(52, 204, 255));
  
  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  constraint.display();
  
  imageMode(CENTER)
  image(boyImage, 250, 640, 200, 200);

  stone.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  keyPressed();

  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}
function mouseReleased()
{
	constraint.fly();
}

function detectCollision(obj1, obj2)
{
	var distance = dist(obj1.body.position.x, obj1.body.position.y,
	obj2.body.position.x, obj2.body.position.y)

	if (distance < 60)
	{
		Matter.Body.setStatic(obj2.body, false);
	}
}

function keyPressed()
{
	if(keyWentDown(UP_ARROW))
	{
		Matter.Body.setPosition(stone.body, {x: 190, y: 580})
		constraint.attach(stone.body);
	}
}