// Object.create and Prototypes

var person =  {

    firstName: "AnythingFirstName",
    lastName: "SomethingLastName",
    greet: function() {

        return this.firstName + " " + this.lastName;

    }
}

var matti = Object.create(person)
matti.firstName = "Matti";
matti.lastName = "Meikäläinen";

console.log(matti.firstName);
console.log(matti.greet());
console.log(person.firstName)

var maija = Object.create(matti);
maija.firstName = "Maija";
console.log(maija.firstName);
console.log(maija.greet());