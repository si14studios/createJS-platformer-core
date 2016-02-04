function makeLevel() { // Creates objects in the canvas
  // Creates level as an array
  var level = {};

  // Creates level floor and ceiling
  level.floor = makePlatform({x: 0,y: (window.innerHeight - 55),width: (window.innerWidth),height: 10});
  platforms.push(level.floor);
  stage.addChild(level.floor.shape);
  level.ceiling = makePlatform({x: 0, y: 0, width: (window.innerWidth), height: 10});
  platforms.push(level.ceiling);
  stage.addChild(level.ceiling.shape);

  // Returns level array
  return level;
} // makeLevel()

function makePlatform(info) { // Creates CreateJS Rectangle objects; For platforms
  // Creates a rect object
  var rect = {
      x: info.x,
      y: info.y,
      width: info.width,
      height: info.height
  };

  // Creates a rectShape CreateJS shape
  var rectShape = new createjs.Shape();

  //Creates a black rectShape with rect info
  rectShape.graphics.beginFill("black").drawRect(rect.x, rect.y, rect.width, rect.height);
  rect.shape = rectShape;

  // Returns rect object
  return rect;
} // makePlatform()

function makeSpriteSheet(x) { // Creates Sprite Sheets to use for animations
  // Creates a CreateJS Sprite Sheet
  spriteSheet = new createjs.SpriteSheet({
    framerate: 20, // Framerate of animation
    images: [x], // Image parameter
    frames: {width: 120, height: 87}, // Size of each frame of Sprite Sheet in pixels; Example framesize
    animations: { // Example animations
        walk: [18, 23,"idle"],
        idle: {
          frames: [7, 9],
          speed: 0.2
        },
        jump: {
          frames: [12,15],
          speed: 0.2,
          next: "idle"
        },
        attack: {
          frames: [0,2],
          speed: 0.5,
          next: "idle"
        }
   }
  });
  // Returns a CreateJS Sprite Sheet
  return spriteSheet;
} // makeSpriteSheet()

function makePlayer(prop) { // Creates a player out of a Sprite Sheet; {x: ?, y: ?, width: ?, height: ?, veldx: ?, veldy: ?, sprite: ?, username: ?}
  // Creates a sprite sheet
  var ss = makeSpriteSheet(prop.sprite);

  // Creates a CreateJS Sprite
  var player = new createjs.Sprite(ss, "idle");

  // Creates player using prop
  player.x = prop.x;
  player.y = prop.y;
  player.rect = {x: player.x, y: player.y, width: prop.width, height: prop.height}
  player.vel = {dx: prop.veldx, dy: prop.veldy};
  player.username = prop.username;
  player.hp = 100;
  player.nameText = new createjs.Text(prop.username + "(" + player.hp + "hp)", "20px Arial","#0000ff");
  player.nameText.x = player.x;
  player.nameText.y = player.y;

  //Returns a CreateJS Sprite
  return player;
} // makePlayer(prop)
