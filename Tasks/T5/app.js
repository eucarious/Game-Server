// By Value
// All primitives outside of objects

var personName = "Matti";

var firstName = personName;

personName = "Maija";

console.log(firstName);
console.log(personName);

// By Reference

var myName = {

    firstName: 'Mikko'

}

// var that POINTS to an object called myName
var person = myName;

console.log(person.firstName); // Mikko

myName.firstName = "Jarkko";

console.log(person.firstName); // Jarkko (pointing)
console.log(myName.firstName); // Jarkko

