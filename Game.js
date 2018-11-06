class Game
{
  /**
	  * @constructor - Creates game object and player and goal objs
 	 */
  constructor()
  {
    this.col = [255, 0, 0];
    this.pm = new ProjectileManager();
    this.p = new Projectile("pOne");
    this.p.setPosition(100, 100);
    this.p.setAngle(45);
    this.p.setSpeed(1.2);
    this.pm.addProjectile(this.p);
  }

  /**
    * Initialises canvas and adds event listener
   */
  initWorld()
  {
    document.addEventListener("keydown", keyDownHandler.bind(this));
    var canvas = document.createElement("canvas");
    canvas.id = 'mycanvas';
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    window.addEventListener("keydown", function(e)
    {
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1){
        e.preventDefault();
    }
    }, false);
  }

  /**
   * Calls draw then update to create infinite game loop
   */
  update()
  {
    gameNs.game.draw();

    gameNs.game.pm.update();
    //Recursively call game.update here to create loop
    window.requestAnimationFrame(gameNs.game.update);
  }

  /**
   * Calls draw function in player and goal objects
   */
  draw()
  {
    var canv = document.getElementById("mycanvas");
    var ctx = canv.getContext("2d");
    ctx.clearRect(0, 0, canv.width, canv.height);

    this.pm.render();
  }
}

/**
* @param {Event} e
* Function for the switch cases to allow input from arrow keys
*	Clears the canvas also
*/
function keyDownHandler(e)
{
	var canvas = document.getElementById("mycanvas");

	var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

	switch (e.keyCode)
	{
	case 37:
    //Left
		break;
  case 38:
    //this.pm.getProjectile("pOne").fire();
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
