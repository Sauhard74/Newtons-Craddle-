class Sling{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {

        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(10);
        var PAX = pointA.x;
        var PAY = pointA.y;

        var PBX = pointB.x+this.offsetX;
        var PBY = pointB.y+this.offsetY;
        line(PAX, PAY, PBX, PBY);
    }
}