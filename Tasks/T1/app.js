// first class functions
function greet() {
    console.log("Welcome");
}

greet();

function logGreeting(fn) {
    fn();
}

logGreeting(greet);

var greetMe = function() {
    console.log("What a good day");
}

greetMe();

logGreeting(greetMe);
