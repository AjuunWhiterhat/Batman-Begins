class Umbrella{
    constructor(x,y,radius){
        var options={
            isStatic:true,
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("images/walking_1.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,20);
        pop();      
    }
}