const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop = [];
var maxDrop = 100
var thunder;
var t1img,t2img,t3img,t4img;
var thunderCreatedFrame = 0;

function preload(){
    t1img = loadImage("thunderbolt/1.png");
    t2img = loadImage("thunderbolt/2.png");
    t3img = loadImage("thunderbolt/3.png");
    t4img = loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(400,700);
   engine = Engine.create();
    world = engine.world;

    for(var i = 0;i<maxDrop;i++){
    drop.push(new Drop(random(0,400),random(0,400),5))
    }
}

function draw(){
    background(0);
     Engine.update(engine);

    for(var i = 0; i <maxDrop; i++){
        drop[i].updateY()
        drop[i].display()
    }
    var rand = Math.round(random(1,4))
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch (rand) {
            case 1:thunder.addImage(t1img)
                break;
                  case 2:thunder.addImage(t2img)
                break;
                  case 3:thunder.addImage(t3img)
                break;
                  case 4:thunder.addImage(t4img)
                break;
            default:break;
        }
        thunder.scale = random(0.3,0.6)
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){ 
        thunder.destroy(); 
    }
    drawSprites()
}   

