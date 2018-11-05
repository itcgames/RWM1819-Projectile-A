


class Projectile
{
    constructor()
    {
        this.x = 0;
        this.y = 0; 
        this.angle = 0;
        this.speed = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.width = 5;
        this.height = 5;
    }

    update()
    {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    render()
    {
        var canvas = document.getElementById('mycanvas');
 	    var ctx = canvas.getContext('2d');
 	    ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    setPosition(x, y)
    {
        this.x = x;
        this.y = y;
    }

    setAngle(a)
    {
        this.angle = a;
    }

    setSpeed(s)
    {
        this.speed = s;
    }

    fire()
    {

    }
}