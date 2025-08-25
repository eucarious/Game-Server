// Event emitter module
// use events module in actual projects. This is to learn how an emitter works

function Emitter() {

    this.events = {};

}

// Emitter needs 2 functions: ON and EMIT 

// type is the description / name of the event.
// listener is a function that reacts to the event. The response
// ON is only for "building" the content of the event emitter
Emitter.prototype.on = function(type, listener){

    this.events[type] = this.events[type] || [];
    this.events[type].push(listener); // adds listener to array of reactions

}

Emitter.prototype.emit = function(type){

    // do we have an equivalent event?
    if (this.events[type]) {

        // if so, run all the reaction functions
        this.events[type].forEach(function(listener){
            listener();
        })

    }
}

module.exports = Emitter;