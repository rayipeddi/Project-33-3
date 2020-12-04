const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = []
var particle
var turn = 0;
var divisionHeight=300;
var score =0;
var gameState = "play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  mousePressed()
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ballScore()
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     turn++;
     
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   console.log(score)
   fill("white")
   textSize(15)
   text("Score: "+score,17,17)
}

function ballScore(){
  if(gameState == "play")
  {
  if(particle!=null)
  {
  particle.display();
  if (particle. body . position. y>760)
  {
  if (particle. body . position.x < 300)
  {
  score = score+500;
  particle=null;
  if(turn >= 5){
    gameState = "end"
  }
  }
  }
}
  }
}
function mousePressed(){
  if(mouseIsPressed && gameState !== "end"){
    turn++
    score = score+50
    particles.push(new Particle(mouseX,10,10,10));
  }
}