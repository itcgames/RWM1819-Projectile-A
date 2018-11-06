

class ProjectileManager
{
    constructor()
    {
        this.projectiles = [];
        this.globalGravity;
        this.globalFriction;
        this.globalAirResistance;
    }

    addProjectile(p)
    {
        console.log("Added projectile");
        this.projectiles.push(p);
    }

    createProjectile(s)
    {
        this.projectiles.push(new Projectile(s));
    }

    setGlobalFriction(v)
    {
        this.globalFriction = v;
    }

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
            if (this.projectiles[i].IsFired())
            {
                this.projectiles[i].update();
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