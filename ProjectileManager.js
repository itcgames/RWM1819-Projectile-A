

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


}