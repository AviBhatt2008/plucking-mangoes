class Ground 
{
    constructor(x, y, w, h)
    {
        var options =
        {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        this.pos = this.body.position;
    }
    display()
    {
        fill(rgb(118, 57, 49))
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, width, 20);
    }
}
