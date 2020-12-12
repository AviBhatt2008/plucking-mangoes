class Tree
{
    constructor(x, y, width, height)
    {
        this.image = loadImage("Plucking+mangoes/Plucking mangoes/tree.png");
        this.x = x;
        this.y = y;
    }
    display()
    {
        imageMode(CENTER)
        image(this.image, this.x, this.y, 375, 500);
    }
    
}