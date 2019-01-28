
class Projectile
{
    /**
     * Create a new projectile with a name
     * and type(simple or complex).
     * @param {string - name} s 
     * @param {string} type 
     */
    constructor(s, type)
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
        this.type = type;
        this.ttl = 5;
        this.timer = 0;
    }

    /**
     * Calculates projectile trajectory 
     * and updates position
     * @param {int - gravity} g 
     * @param {int - friction} f 
     */
    update(g, f)
    {
        this.timer += 1 / 60;
        if (this.type === "simple")
        {
            this.x += this.velocityX * this.speed;
            this.y += this.velocityY * this.speed;
        }
        else if (this.type === "complex")
        {
            //Projectile Motion
            var tempX = this.x;
            var tempY = this.y;
            var t = gameNs.game.dt / 1000;
            //var t = dt / 1000;
            this.x = tempX + this.velocityX * (t) * Math.cos(this.angle);
            this.y = tempY + this.velocityY * (t) * Math.sin(this.angle) - ((g * (t * t) / 2));

            this.velocityY += g;
            this.velocityX -= f;

            if (this.y < this.initialY)
            {
               
            }
            else
            {
              //  this.velocityY = 0;
              //  this.velocityX = 0;
            }
        }

        if (this.timer > this.ttl)
        {
            this.fired = false;
        }
    }

    /**
     * Draws the projectiles
     */
    render()
    {
        var canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');
        ctx.save();
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }

    /**
     * Sets the X/Y coordinate
     * of the projectile after
     * declaration
     * @param {int} x 
     * @param {int} y 
     */
    setPosition(x, y)
    {
        this.x = x;
        this.y = y;
    }

    /**
     * Sets the time to live
     * in seconds of the projectile
     * @param {int} t 
     */
    setTimeToLive(t)
    {
        this.ttl = t;
    }

    /**
     * Returns true if 
     * projectile is fired
     */
    IsFired()
    {
        return this.isFired;
    }

    /**
     * Sets the angle of the 
     * projectile after declaration
     * @param {int} a 
     */
    setAngle(a)
    {
        this.angle = a;
    }

    /**
     * Returns the velocity of the
     * projectile as a Vector2
     */
    getVelocity()
    {
        return new Vector2(this.velocityX / (1 / this.speed), this.velocityY / (1 / this.speed));
    }

    /**
     * Returns the position of the
     * projectile as a Vector2
     */
    getPosition()
    {
        return new Vector2(this.x, this.y);
    }

    /**
     * Sets the mouse position variable
     * for the projectile
     * @param {int} mx 
     * @param {int} my 
     */
    setMousePosition(mx, my)
    {
        this.mX = mx;
        this.mY = my;
    }

    /**
     * Calculates the angle between the projectile
     * start position and current mouse position,
     * and creates a vector to the mouse coordinate
     */
    calculateAngle()
    {
        //(vx, vy) vector to mouse pointer
        var vx = this.x - this.mX;
        var vy = this.y - this.mY;

        this.velocityX = -vx;
        this.velocityY = -vy;

        this.initialY = this.y;

        console.log("x: " + this.velocityX + " Y: " +  this.velocityY);
    }

    /**
     * Sets the speed of the 
     * projectile.
     * @param {int} s 
     */
    setSpeed(s)
    {
        this.speed = s;
    }

    /**
     * 
     * @param {Float} v1 
     * @param {Float} v2 
     */
    setVelocity(v1, v2)
    {
        this.velocityX = v1;
        this.velocityY = v2;
    }

    /**
     * Sets the projectile isFired
     * bool
     * @param {bool} c 
     */
    setFired(c)
    {
        this.isFired = c;
    }

    /**
     * Checks the projectile type
     * and sets it to isFired
     */
    fire()
    {
        if (this.type === "simple")
        {
            this.isFired = true;
        }
        else{
            console.log("Fire!")
            this.isFired = true;
            //this.calculateAngle();
        }
    }
}