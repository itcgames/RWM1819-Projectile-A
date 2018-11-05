var gameNs = {};

/**
 *  Program entry point
 */
function main()
{
  const game = new Game();
  gameNs.game = game; //Add game as a property of gameNs
  game.initWorld(); //Initialise game
  game.update(); //Call game.update() once
}

/**
 *  Calls requestAnimationFrame for update method
 *  to start recursive loop
 @param {Number} value
 */
function update()
{
  window.requestAnimationFrame(update);
}

/**
 *  Clamp a value between a min and max
 @param {Number} value
 */
function clamp(value, min, max)
{
	if (max < min)
	{
		var temp = min;
		min = max;
		max = temp;
	}
	return Math.max(min, Math.min(value, max));
}

/**
 *  Rounds a number to a value between 0 and 255
 */
function rgb(r, g, b)
{
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}
