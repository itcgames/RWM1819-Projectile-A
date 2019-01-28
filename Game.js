class Game {
  /**
   * @constructor - Creates game object and player and goal objs
   */
  constructor() {
    this.col = [255, 0, 0];
    //Create projectile manager object
    this.pm = new ProjectileManager();
    //Create single projectile
    this.p = new Projectile("pOne", "complex");
    this.interceptor = new Projectile("pTwo", "interceptor");
    //Set projectile attributes
    this.p.setPosition(400, 600);
    this.p.setVelocity(0, -10);
    this.p.setAngle(90);
    this.p.setSpeed(50);
    this.p.setDebugModeEnable(true);
    this.pm.setGlobalGravity(0.5);
    this.pm.setGlobalFriction(0.02);
    //Push projectile into manager
    this.pm.addProjectile(this.p);
    this.prevTime = 0;
    this.mX = 0;
    this.mY = 0;
    this.dt = 0;
  }

  /**
   * Initialises canvas and adds event listener
   */
  initWorld() {
    document.addEventListener("keydown", keyDownHandler.bind(this));
    var canvas = document.createElement("canvas");
    canvas.id = 'mycanvas';
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    window.addEventListener("mousemove", function (e) {
      gameNs.game.mX = e.clientX;
      gameNs.game.mY = e.clientY;
    });

    window.addEventListener("keydown", function (e) {
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
    }, false);
  }

  /**
   * Calls draw then update to create infinite game loop
   */
  update() {
    var now = Date.now();
    var dt = (now - gameNs.game.prevTime);
    gameNs.game.dt = dt;
    gameNs.game.prevTime = now;
    gameNs.game.draw();
    //Update projectile manager
    gameNs.game.pm.update(dt, gameNs.game.mX, gameNs.game.mY);
    dt = 0;
    //Recursively call game.update here to create loop
    window.requestAnimationFrame(gameNs.game.update);
  }

  /**
   * Calls draw function in player and goal objects
   */
  draw() {
    var canv = document.getElementById("mycanvas");
    var ctx = canv.getContext("2d");
    ctx.clearRect(0, 0, canv.width, canv.height);

    //Render projectiles through manager
    this.pm.render();
  }
}

/**
 * @param {Event} e
 * Function for the switch cases to allow input from arrow keys
 *	Clears the canvas also
 */
function keyDownHandler(e) {
  var canvas = document.getElementById("mycanvas");

  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  switch (e.keyCode) {
    case 37:
      //Left
      break;
    case 38:
      //Fire projectiles
      this.pm.fireProjectiles();
      //Up
      break;
    case 39:
      //Right
      break;
    case 40:
      //Down
      break;
  }
  //Draw Call?
}