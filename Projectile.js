class Projectile {
    /**
     * Create a new projectile with a name
     * and type(simple or complex).
     * @param {string - name} s 
     * @param {string} type 
     * @param {int} targetX
     * @param {int} targetY
     */
    constructor(s, type, tx, ty) {
        this.name = s;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.speed = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.width = 8;
        this.height = 8;
        this.fired = false;
        this.initialY = 0;
        this.mX = 0;
        this.mY = 0;
        this.tX = tx;
        this.tY = ty;
        this.type = type;
        this.ttl = 5;
        this.timer = 0;
        this.debugMode = false;
    }

    /**
     * Calculates projectile trajectory 
     * and updates position
     * @param {int - gravity} g 
     * @param {int - friction} f 
     */
    update(g, f) {
        this.timer += 1 / 60;
        if (this.type === "simple") {
            this.x += this.velocityX * this.speed;
            this.y += this.velocityY * this.speed;
        } else if (this.type === "complex") {
            //Projectile Motion
            var tempX = this.x;
            var tempY = this.y;
            var t = gameNs.game.dt / 100;
            //var t = dt / 1000;
            this.velocityX * this.speed * 100;
            this.velocityY * this.speed * 100;
            tempX = this.velocityX * Math.cos(this.degreesToRadians(this.angle));
            tempY = this.velocityY * Math.sin(this.degreesToRadians(this.angle)) - ((g / 2));

            console.log("X: ", this.x, " ", "Y : ", this.y);

            this.x += this.velocityX;
            this.y += this.velocityY;
            this.velocityY += g;
            this.velocityX -= f;

            if (this.y < this.initialY) {} else {
                //  this.velocityY = 0;
                //this.velocityX = 0;
            }
        } else if (this.type === "interceptor") {
            seek(this.tx, this.ty);
            this.x += this.velocityX;
            this.y += this.velocityY;
        }

        if (this.timer > this.ttl) {
            this.fired = false;
        }
    }

    /**
     * Draws the projectiles
     */
    render() {
        var canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');

        if (this.debugMode) {
            ctx.save();
            ctx.strokeStyle = "#20FF00";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();

            ctx.save();
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.velocityX * 10, this.y + this.velocityY * 10);
            ctx.stroke();
            ctx.restore();
        } else {
            ctx.save();
            ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
        }
    }

    /**
     * Sets the X/Y coordinate
     * of the projectile after
     * declaration
     * @param {int} x 
     * @param {int} y 
     */
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Seeks towards a position
     * @param {int} px 
     * @param {int} py 
     */
    seek(px, py) {
        this.velocityX = px - this.x;
        this.velocityY = py - this.y;

        this.velocityX = this.velocityX / Math.sqrt((this.velocityX * this.velocityX) + (this.velocityY * this.velocityY));
        this.velocityY = this.velocityY / Math.sqrt((this.velocityX * this.velocityX) + (this.velocityY * this.velocityY));

        this.velocityX * this.speed;
        this.velocityY * this.speed;

        this.angle = this.degreesToRadians(Math.atan2(py - this.y, px - this.x));
    }

    /**
     * Sets the time to live
     * in seconds of the projectile
     * @param {int} t 
     */
    setTimeToLive(t) {
        this.ttl = t;
    }

    /**
     * Returns true if 
     * projectile is fired
     */
    IsFired() {
        return this.isFired;
    }

    /**
     * Sets debug draw mode to 
     * true or false
     * @param {bool} s 
     */
    setDebugModeEnable(s) {
        this.debugMode = s;
    }

    /**
     * Sets the angle of the 
     * projectile after declaration
     * @param {int} a 
     */
    setAngle(a) {
        this.angle = a;
    }

    /**
     * Returns the velocity of the
     * projectile as a Vector2
     */
    getVelocity() {
        return new Vector2(this.velocityX / (1 / this.speed), this.velocityY / (1 / this.speed));
    }

    /**
     * Returns the position of the
     * projectile as a Vector2
     */
    getPosition() {
        return new Vector2(this.x, this.y);
    }

    /**
     * Sets the mouse position variable
     * for the projectile
     * @param {int} mx 
     * @param {int} my 
     */
    setMousePosition(mx, my) {
        this.mX = mx;
        this.mY = my;
    }

    /**
     * Calculates the angle between the projectile
     * start position and current mouse position,
     * and creates a vector to the mouse coordinate
     */
    calculateAngle() {
        //(vx, vy) vector to mouse pointer
        var vx = this.x - this.mX;
        var vy = this.y - this.mY;

        this.velocityX = -vx;
        this.velocityY = -vy;

        this.initialY = this.y;

        console.log("x: " + this.velocityX + " Y: " + this.velocityY);
    }

    /**
     * Sets the speed of the 
     * projectile.
     * @param {int} s 
     */
    setSpeed(s) {
        this.speed = s;
    }

    /**
     * 
     * @param {Float} v1 
     * @param {Float} v2 
     */
    setVelocity(v1, v2) {
        this.velocityX = v1;
        this.velocityY = v2;
    }

    /**
     * Sets the projectile isFired
     * bool
     * @param {bool} c 
     */
    setFired(c) {
        this.isFired = c;
    }

    /**
     * Checks the projectile type
     * and sets it to isFired
     */
    fire() {
        if (this.type === "simple") {
            this.isFired = true;
        } else if (this.type === "complex") {
            console.log("Fire!")
            this.isFired = true;

            //this.calculateAngle();
        }
    }

    degreesToRadians(a) {
        return a * (180 / Math.PI);
    }
}