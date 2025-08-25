// Event emitter part1
var Emitter = require('./emitter');

// our local event emitter
var emtr = new Emitter;

// next, we build the event emitter content
emtr.on('greet', function(){
    console.log("Hello there, everyone!");
})
emtr.on('greet', function(){
    console.log("How are you doing?");
})
emtr.on('greet', function(){
    console.log("May I have your ticket?");
})

emtr.on('alertgreet', function(){
    console.log("Help!");
})
emtr.on('alertgreet', function(){
    console.log("You have to do something!");
})

// Actually emit the events

emtr.emit('greet');
emtr.emit('alertgreet');
