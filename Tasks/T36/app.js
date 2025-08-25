// Arrow Functions

// Making function expression tighter

// traditional way
function multiplyByTwo (value) {
    return value * 2 ;
}

// invoke
console.log(multiplyByTwo(5)); // prints 10

// ********************** //
// Using arrow function
var multiplyByThree = (someValue) => {
    return someValue * 3;
}

console.log(multiplyByThree(5)); // prints 15

// even more compact
var multiplyByFour = someValue => someValue * 4;

console.log(multiplyByFour(5)) // prints 20

