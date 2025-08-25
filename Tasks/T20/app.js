// ES6 JS Typed Arrays
var buffer = new ArrayBuffer(8); // 8 bytes. 1 byte is 8 bits. total 64 bits

var view = new Int32Array(buffer);

// for each number we will use 32 bits to store it.
// 2 numbers in total in our buffer

view[0] = 872; // max, 2 billion smth. can overflow ;)
view[1] = 293;
view[2] = 111; // will not fit!

console.log(view);