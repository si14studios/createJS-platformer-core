// Basic variables
var stage, canvas, context, ticker; // Setup variables

function init() { // Main function that runs when the HTML body loads; Runs once
  // Makes canvas fit to screen
  canvas = document.getElementById('gameCanvas');
  canvas.height = window.innerHeight - 50;
  canvas.width = window.innerWidth;

  // Makes canvas smooth (not blurry)
  context = canvas.getContext('2d');
  context.webkitImageSmoothingEnabled = false;
  context.mozImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;

  // Creates a CreateJS stage
  stage = new createjs.Stage("gameCanvas");

  //Creates ticker
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", handleTick);
} // init()

function handleTick(event) { // Game loop
  // Updates stage
  stage.update(event);

  // PUT GAME STUFF HERE
} // handleTick(event)
