class Stone
{
    constructor(x, y, r)
    {
        this.image = loadImage("Plucking+mangoes/Plucking mangoes/stone.png");
        var options = 
        {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
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