/* global ProjectileManager, describe, it, expect, should */

describe('ProjectileManager()', function () {
  'use strict';

  let projectileManager;

  beforeEach(()=>{
    projectileManager = new ProjectileManager();
  })

  it('exists', function () {
    expect(constructor).to.be.a('function');

  });

  it('Stores a projectile', function () {
    let p = new Projectile();
    projectileManager.addProjectile(p);
    expect(projectileManager.projectiles[0]).to.not.be.null;
  });

  // Add more assertions here
});
