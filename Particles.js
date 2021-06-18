class Particles{
    constructor(x,y,angle){
      var options={
          restitution:0.8
      }

      this.body=Bodies.circle(x,y,8,options);
      Matter.Body.setAngle(this.body,angle);
      this.color=color(random(0,255),random(0,255),random(0,255))
      World.add(world,this.body);
    }
    display(){

        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,8,8);
        pop();
    }
}