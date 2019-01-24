class ProjectileManager
{
    /**
     * 
     */
    constructor()
    {
        this.projectiles = [];
        this.globalGravity;
        this.globalFriction;
        this.globalAirResistance;
    }

    /**
     * 
     * @param {Projectile} p 
     */
    addProjectile(p)
    {
        console.log("Added projectile");
        this.projectiles.push(p);
    }

    /**
     * 
     * @param {String : name} s 
     */
    createProjectile(s)
    {
        this.projectiles.push(new Projectile(s));
    }

    /**
     * 
     * @param {Friction Value} v 
     */
    setGlobalFriction(v)
    {
        this.globalFriction = v;
    }

    /**
     * 
     * @param {Gravity Value} v 
     */
    setGlobalGravity(v)
    {
        this.globalGravity = v;
    }

    setGlobalAirResistance(v)
    {
        this.globalAirResistance = v;
    }

    getProjectile(s)
    {
        for (var i = 0; i < this.projectiles.length; i++)
        {
            if (this.projectiles[i].name == s)
            {
                return this.projectiles[i];
            }
        }
    }

    clearProjectiles()
    {
        this.projectiles.length = 0;
    }

    fireProjectiles()
    {
        console.log("Fire Projectiles!");
        for (var i = 0; i < this.projectiles.length; i++)
        {
            this.projectiles[i].fire();
        }
    }

    update()
    {
        for (var i = 0; i < this.projectiles.length; i++)
        {
           // this.projectiles[i].setMousePosition(gameNs.game.mX, gameNs.game.mY);
            if (this.projectiles[i].IsFired())
            {
                this.projectiles[i].update(this.globalGravity, this.globalFriction);
            }
            else
            {
                this.clearProjectiles();
            }
        }
    }

    render()
    {
        for (var i = 0; i < this.projectiles.length; i++)
        {
            this.projectiles[i].render();
        }
    }
}