class Bruce extends Umbrella{
    constructor(x,y,width,height){
        super(500,height-30,170,20);
        this.image = loadImage("images/walking_1.png");
    }

    display(){
        image(this.image,200,565,215,200);
        super.display();
    }
}