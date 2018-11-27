
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
        this.initialY = 0;
        this.mX = 0;
        this.mY = 0;
    }

    update(dt, g, f)
    {
        //Projectile Motion
        var tempX = this.x;
        var tempY = this.y;
        var t = dt / 1000;
        this.x = tempX + this.velocityX * (t) * Math.cos(this.angle);
        this.y = tempY + this.velocityY * (t) * Math.sin(this.angle) - ((g * (t * t) / 2));


        if (this.y < this.initialY)
        {
            this.velocityY += g;
            this.velocityX -= f;
        }
        else
        {
            this.velocityY = 0;
            this.velocityX = 0;
        }

       // console.log("Gravity: " + g);
        //console.log("V::X: " + this.velocityX, "V::Y: " + this.velocityY);
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

    setMousePosition(mx, my)
    {
        this.mX = mx;
        this.mY = my;
    }

    calculateAngle()
    {
        //(vx, vy) vector to mouse pointer
        var vx = this.x - this.mX;
        var vy = this.y - this.mY;

        this.velocityX = -vx;
        this.velocityY = -vy;

        //Calculate angle to cursor using arc tangent
       // this.angle = Math.atan(vy / vx);

        //Calculate velocity using mangnitude of vector cursor
       // this.magV = Math.sqrt((vx * vx) + (vy * vy));

       // this.velocityX = (vx / this.magV)  * Math.cos(this.angle);
       // this.velocityY =  (vy / this.magV)  * Math.sin(this.angle);
       // this.velocityX = this.velocityX * Math.round(this.magV);
       // this.velocityY = this.velocityY * Math.round(this.magV);
       this.initialY = this.y;

        console.log("x: " + this.velocityX + " Y: " +  this.velocityY);
    }

    setSpeed(s)
    {
        this.speed = s;
    }

    fire(dt)
    {
        console.log("Fire!")
        this.isFired = true;
        this.calculateAngle();
    }
}