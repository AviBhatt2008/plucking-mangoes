class Mango
{
    constructor(x, y, r)
    {
        var options = 
        {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
        this.image = loadImage("Plucking+mangoes/Plucking mangoes/mango.png");
    }
    display()
    {
        push()
        translate(this.body.position.x, this.body.position.y + 10);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop()
    }
}