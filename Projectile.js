

class Projectile
{
    constructor(s)
    {
        this.name = s;
        this.x = 0;
        this.y = 0; 
        this.angle = 0;
        this.speed = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.width = 5;
        this.height = 5;
        this.fired = false;
    }

    update()
    {
        this.x += this.velocityX;
        this.y += this.velocityY;

        this.velocityX = this.velocityX * Math.sin(this.angle) * this.speed;
        this.velocityY = this.velocityY * Math.cos(this.angle) * this.speed;
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

    IsFired()
    {
        return this.isFired;
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
        console.log("Fire!")
        this.isFired = true;
        this.velocityX = 1;
        this.velocityY = -1;
    }
}