// Prototypal Inheritance
function Person (fName, lName) {

    this.firstName = fName;
    this.lastName = lName;

}

Person.prototype.greet = function() {

    console.log("Howdy there, pardner!")

}

var matti = new Person('Matti', 'Meikä');

// matti doesnt have a greet function, but it's prototype object does
// calls prototype's greet function

matti.greet();

var maija = new Person('Maija', 'Mehi');

maija.greet();

// matti and maija have the same prototype

console.log(matti.__proto__);
console.log(maija.__proto__);

// if it is in the exact same. strict equality. must be same type too
console.log(matti.__proto__ === maija.__proto__);
