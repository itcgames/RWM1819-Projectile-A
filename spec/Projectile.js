/* global Projectile, describe, it, expect, should */

describe('Projectile()', function () {
  'use strict';

  let projectile;

  beforeEach(()=>{
    projectile = new Projectile();
  })

  it('exists', function () {
    expect(constructor).to.be.a('function');
  });

  it('Sets its position', () => {
    projectile.setPosition(100, 100);
    expect(projectile.x).to.equal(100);
  })

  it('Moves', () => {
    projectile.setPosition(100, 100);
    projectile.setAngle(10);
    projectile.fire();  
    expect(projectile.velocityX).to.above(0);
  });

  it('Fires', () => {
    projectile.fire();
    expect(projectile.isFired).to.equal(true);
  })

  // Add more assertions here
});
