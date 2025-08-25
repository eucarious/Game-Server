'use strict'
var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter{

    constructor() {

        super();
        this.greeting = "It is a Thursday. How about a lunch soon?";

    }
    

    greet(){

        console.log(this.greeting);
        this.emit('greetevent');

    }

}