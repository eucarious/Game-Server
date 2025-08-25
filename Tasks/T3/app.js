// Object Literal
var person = {

    firstName: 'Matti',
    lastName: 'Meikäläinen',
    greet: function() {
        console.log("Good day: " + this.firstName + " " + this.lastName);
    }

}

person.greet();
console.log(person['firstName']);
console.log(person.lastName);

function Person(fName, lName, pID) {

    this.firstName = fName;
    this.lastName = lName;
    this.personID = pID;

}

var maija = new Person('Maija', 'Mehiläinen', '123456-7890')
var katri = new Person('Katri', 'Ampiainen', '123456-7891')

console.log(maija.firstName)