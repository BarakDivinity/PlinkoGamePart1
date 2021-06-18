class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body=Bodies.circle(x,y,9,options);
        World.add(world,this.body);
    }
    display(){
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,9,9);
    }
}