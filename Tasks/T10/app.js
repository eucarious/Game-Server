var obj = {

    greet : 'Hello, good morning everyone'

}

console.log(obj.greet);
console.log(obj['greet'])

// arrays can include functions
// if all the elements of an array are invoked
// --> all the functions are run

var arr = []; // empty array

arr.push(function(){

    console.log("What a great Thursday");

})

arr.push(function(){

    console.log("Wonderful day to do JavaScript");

})

arr.push(function(){

    console.log("Hope you're having fun ;)");

})

arr.forEach(function(item){
    item(); //run the item from array. (works since our array is made up of functions)
})