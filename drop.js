class Drop{
    constructor(x,y,radius){
        var options = {
            friction:0.001,
            restitution:0.1
        }
        this.rain = Bodies.circle(x,y,radius/2,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.rain);
    }
    updateY(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
        }
    }
        display(){
            ellipseMode(CENTER);
            fill("blue");
            ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
        }
    }
