class Game
{
  /**
	  * @constructor - Creates game object and player and goal objs
 	 */
  constructor()
  {
    this.col = [255, 0, 0];
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
