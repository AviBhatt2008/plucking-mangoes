class Chain
{
    constructor(bodyA, point)
    {
        var options =
        {
            bodyA: bodyA,
            pointB: point,
            length: 0,
            stiffness: 0.003
        }
        this.sling = Matter.Constraint.create(options);
        this.pointB = point;
        bodyA = bodyA
        World.add(world, this.sling);
    }
    fly()
    {
        this.sling.bodyA = null;
    }
    attach(obj)
    {

        this.sling.bodyA = obj;
    }
    display()
    {   
        if(this.sling.bodyA)
        {
            strokeWeight(3);
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, 
            this.pointB.x, this.pointB.y);
        }
    }
}