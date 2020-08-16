/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 780, 500, 20);
}

function draw() {
  background(0);
  Engine.update(engine); 

  ground.display();

  drawSprites();

  for(var k = 0, k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
}*/
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world; 
var particles =[];
var plinkos =[];
var division =[];


var divisionHeight = 150;

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,800,1700,10);
  ground = new Ground(200, 795, 1700, 20)

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 75))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,125))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,175))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,275))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,325))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,375))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,425))
  }
  for(var k = 0; k <=width; k = k+80){
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight + 50));
  }
}

function draw() {
  if(frameCount % 60 === 0){
    particle = new Particle(random(120, 500), 0, 7, random(0, 360));
    particles.push(particle);
  }

  background("black");
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  






  for(var k = 0; k<division.length;k++){
    division[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }

ground.display();

drawSprites();
}