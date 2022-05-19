const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const body = Matter.Body
const Constriant = Matter.Constraint

var eng,world;


function preload(){
   bg=loadImage("./sprites/bg.png")
   enemyImage = loadImage("./sprites/enemy.png")
   boxImage = loadImage('./sprites/wood1.png')
   birdImage = loadImage("./sprites/bird.png")
   //do not create () first
   logImage = loadImage("./sprites/wood2.png")
   glassImage = loadImage("./sprites/Glass_Block.webp")
   sandImage = loadImage('./sprites/sand.webp')
   TNTImage = loadImage('./sprites/TNT.webp')
   ChuckImage = loadImage('./sprites/Yellow_23.webp')
   BombImage = loadImage('./sprites/Blackbird.webp')
}

function setup(){
  createCanvas(999,600)
  eng = Engine.create()
  world = eng.world;
  ground = Bodies.rectangle(500,590,999,20,
  {isStatic:true})
  World.add(world,ground)
  // creating objects
   bird1=new Bird(100,200,50,50,birdImage)
   bird2=new Bird(100,200,50,50,birdImage)
   bird2.image=ChuckImage
   bird3=new Bird(100,200,80,80,birdImage)
   bird3.image=BombImage

   box1=new Box(550,550,200,40,boxImage)
   box1.image= logImage
   box2=new Box(550,500,300,50,boxImage)
   box2.image= logImage
   box3=new Box(550,450,70,70,boxImage)
   box3.image=TNTImage
   box4=new Box(550,330,220,30,boxImage)
   box5=new Box(580,530,70,70,boxImage)
   box5.image=sandImage
  //  box6=new Box(600,550,60,60,boxImage)
  //  box7=new Box(490,550,60,60,boxImage)
   box8=new Box(520,530,70,70,boxImage)
   box8.image=sandImage
   box4.image = logImage

   enemy1=new Enemy(550,530,70,70)
   enemy3=new Enemy(480,300,70,70)
   enemy4=new Enemy(630,300,70,70)
  //  create box here
  slingshot = new SlingShot(bird1.body,{x:170, y:170});
}


function draw(){
  background(bg)
  Engine.update(eng)
  
  push();
  fill("black")
  rectMode(CENTER)
  noStroke()
  rect(ground.position.x,ground.position.y,999,20)
  pop();
  bird1.display()
  bird2.display()
  bird3.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display() 
  // box6.display()
  // box7.display() 
  box8.display()
  enemy1.display()
  enemy3.display()
  enemy4.display()
  slingshot.display()
}

function keyPressed(){
  
}

function mouseDragged() {
if(mouseX<200 && mouseY<200){
  Matter.Body.setPosition(bird1.body,{x:mouseX, y:mouseY})
}
}

function mouseReleased(){
  slingshot.fly()
}

