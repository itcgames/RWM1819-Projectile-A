class ProjectileManager
{
    /**
     * Create a new ProjectileManager
     * object
     */
    constructor()
    {
        this.projectiles = [];
        this.globalGravity;
        this.globalFriction;
        this.globalAirResistance;
    }

    /**
     * Push projectile into array of 
     * projectiles stored in manager
     * @param {Projectile} p 
     */
    addProjectile(p)
    {
        console.log("Added projectile");
        this.projectiles.push(p);
    }

    /**
     * Pushes back a new projectile with
     * no set properties
     * @param {String : name} s 
     */
    createProjectile(s)
    {
        this.projectiles.push(new Projectile(s));
    }

    /**
     * Sets friction value for all
     * projectiles fired from the manager
     * @param {Int - value} v 
     */
    setGlobalFriction(v)
    {
        this.globalFriction = v;
    }

    /**
     * Sets gravity value for all projectiles
     * fired from the manager
     * @param {Int - Value} v 
     */
    setGlobalGravity(v)
    {
        this.globalGravity = v;
    }

    /**
     * 
     * @param {Int - value} v 
     */
    setGlobalAirResistance(v)
    {
        this.globalAirResistance = v;
    }

    /**
     * Searches the array for the projectile with
     * the key of 's' and returns it.
     * @param {string - name} s 
     */
    getProjectile(s)
    {
        for (var i = 0; i < this.projectiles.length; i++)
        {
            if (this.projectiles[i].name === s)
            {
                return this.projectiles[i];
            }
        }
    }

    /**
     * Clears all the projectiles in the array
     */
    clearProjectiles()
    {
        this.projectiles.length = 0;
    }

    /**
     * Loop through all projectiles in the array
     * and sets them to fired.
     */
    fireProjectiles()
    {
        console.log("Fire Projectiles!");
        for (var i = 0; i < this.projectiles.length; i++)
        {
            this.projectiles[i].fire();
        }
    }

    /**
     * Calls updated function on all projectiles
     * in the manager array
     */
    update()
    {
        for (var i = 0; i < this.projectiles.length; i++)
        {
           // this.projectiles[i].setMousePosition(gameNs.game.mX, gameNs.game.mY);
            if (this.projectiles[i].IsFired())
            {
                this.projectiles[i].update(this.globalGravity, this.globalFriction);
            }
        }
    }

    /**
     * Renders all the projectils in the manager
     * array
     */
    render()
    {
        for (var i = 0; i < this.projectiles.length; i++)
        {
            this.projectiles[i].render();
        }
    }
}