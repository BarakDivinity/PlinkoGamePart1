var engine,world;
var ground,division1,division2,division3,division4,division5,division6,division7;
var plinko,particles;

const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

var particles = []
var plinkos=[]

function setup() {
  createCanvas(500,700);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(250,690,500,15);

  division1=new Divisions(5,535,15,300);
  division2=new Divisions(90,535,15,300);
  division3=new Divisions(170,535,15,300);
  division4=new Divisions(250,535,15,300);
  division5=new Divisions(330,535,15,300);
  division6=new Divisions(410,535,15,300);
  division7=new Divisions(495,535,15,300);

  for(var i=20;i<=width;i=i+50){
    plinkos.push(new Plinko(i,105))
  }

  for(var i=20;i<=width;i=i+50){
    plinkos.push(new Plinko(i,165))
  }
  
  for(var i=20;i<=width;i=i+50){
    plinkos.push(new Plinko(i,235))
  }

  for(var i=20;i<=width;i=i+50){
    plinkos.push(new Plinko(i,295))
  }

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-200,width/2+200),10,PI/6))
  }

  for(var i=0;i<plinkos.length;i=i+1){
      plinkos[i].display();
  }

  for(var i=0;i<particles.length;i=i+1){
    particles[i].display();
  } 

  drawSprites();
}