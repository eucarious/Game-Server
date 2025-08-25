// Inheriting from event emitter pt3
'use strict' // since we're writing ES6
var Greetr = require('./greet');

var greetr1 = new Greetr();

greetr1.on ('greetevent', function(){
    console.log("Hello there");
})

greetr1.greet();