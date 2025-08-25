// Module Patterns

var greet = require('./greet');

greet();

var greet2 = require('./greet2').greet;

greet2();

// greet3 gets the Reference! Remember!! objects are by reference
var greet3 = require('./greet3');

greet3.greet();

greet3.greeting = "Yesterday was Tuesday"

greet3.greet();

var greet3b = require('./greet3');
greet3b.greet();

// Greet 4 becomes the object
var Greet4 = require('./greet4');
// now we can make new objects from Greet4
var grtr = new Greet4();
grtr.greet();

var grtr2 = new Greet4();
grtr2.greeting = "Come here!"
grtr2.greet();
grtr.greet();

var greet5 = require('./greet5');
greet5.greet();
greet5.helloThere();
// Only grabs the helloThere part.
var greet5b = require('./greet5').helloThere;
greet5b();