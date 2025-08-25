// Inheriting from event emitter

// load core modules

var EventEmitter = require('events');
var util = require('util');

// Create new constructor Object

function Greetr(){

    this.greeting = "It is a Thursday. How about a lunch soon?"

}

// tell Greetr that its prototype's prototype is 
// the Event Emitter's prototype
// Greetr gets all of event emitter's features
// Greetr is both our custom object AND an event emitter
util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

// create a new object using Greetr constructor
var greetr1 = new Greetr();

greetr1.on ('greet', function(){
    console.log("Hello there");
})

greetr1.greet();