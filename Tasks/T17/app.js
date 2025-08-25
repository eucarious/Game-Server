// Inheriting from event emitter part 2

var EventEmitter = require('events');
var util = require('util');

function Greetr(){

    // Make this a proper / full inheritance process
    EventEmitter.call(this);

    this.greeting = "It is a Thursday. How about a lunch soon?";

}

util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

var greetr1 = new Greetr();

greetr1.on ('greet', function(){
    console.log("Hello there");
})

greetr1.greet();