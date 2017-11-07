const Util = require ("./util.js");
const MovingObject = require('./moving_object.js');

const canvas = document.getElementById("canvas");
let c = canvas.getContext('2d');



const Asteroid = function Asteroid(options = {}) {
  options.color = this.color;
  options.pos = options.pos;
  options.radius = this.radius;
  options.vel = options.vel;

  // MovingObject.call(this, options);
};

Util.inherits(Asteroid(), MovingObject());
// Asteroid.color = "grey";
// Asteroid.radius = 50;
// Asteroid.pos = [20, 20];

Asteroid.draw(c);
