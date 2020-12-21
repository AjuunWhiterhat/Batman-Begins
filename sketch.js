const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var maxDrops=100;
var drops = [];
var bruce;
var umbrella;
var thunder1IMG, thunder2IMG, thunder3IMG, thunder4IMG;
var thunder;


function preload(){
  thunder1IMG = loadImage("images/1.png");
  thunder2IMG = loadImage("images/2.png");
  thunder3IMG = loadImage("images/3.png");
  thunder4IMG = loadImage("images/4.png");
    
}

function setup(){
   createCanvas(600,750);

    engine = Engine.create();
    world = engine.world;

    if(frameCount%40===0){
      for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400),7));
      }
    }

    



    umbrella = new Umbrella (300,630,40);
    bruce = new Bruce();
    

    Engine.run(engine);
    
}

function draw(){
    background(0, 0, 0);
    
   

    for (var i = 0; i < drops.length; i++) {
     
      drops[i].display();
      
    }


    

    

    bruce.display();

    if(frameCount%40===0){
      thunder = createSprite(200,30,40,40);
      thunder.lifetime = 10;
      var rand = Math.round(random(1,4));
      console.log(rand);
                     switch(rand){
                         case 1: thunder.addImage("Thunder1",thunder1IMG);
                         break;
                         case 2: thunder.addImage("Thunder2",thunder2IMG);
                         break;
                         case 3: thunder.addImage("Thunder2",thunder3IMG);
                         break;
                         case 4: thunder.addImage("Thunder2",thunder4IMG); 
                         break;
                     }
    }

    drawSprites();
    
}   

