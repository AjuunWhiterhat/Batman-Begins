class Drop{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            friciton:0.1,
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill(11, 6, 80);
        ellipse(pos.x,pos.y,this.radius);
        pop();

        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
        }
    }
}