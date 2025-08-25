var util = require('util');

function Person(){

    this.firstname = "Matti",
    this.lastname = "Meikäläinen"

}

Person.prototype.greet = function(){

    console.log(`Hello there ${this.firstname} ${this.lastname}`);

}

function Policeman(){

    Person.call(this);
    this.badgeNum = "1110123456789";

}

util.inherits(Policeman, Person);
var officer = new Policeman;
officer.greet();