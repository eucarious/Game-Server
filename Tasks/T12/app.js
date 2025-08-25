// Event emitter part2. Now with node's native event emitter!
var Emitter = require('events');

// use to make the keywords easier to manage 
// AND catch any mistakes / typos. 
// regular strings won't give you an error since there's no bug syntax wise
var eventConfig = require('./config').events;

// our local event emitter
var emtr = new Emitter;

// next, we build the event emitter content
emtr.on(eventConfig.GREET, function(){
    console.log("Hello there, everyone!");
})
emtr.on(eventConfig.GREET, function(){
    console.log("How are you doing?");
})
emtr.on(eventConfig.GREET, function(){
    console.log("May I have your ticket?");
})

emtr.on(eventConfig.ALERTGREET, function(){
    console.log("Help!");
})
emtr.on(eventConfig.ALERTGREET, function(){
    console.log("You have to do something!");
})

// Actually emit the events

emtr.emit('greet');
emtr.emit('alertgreet');
