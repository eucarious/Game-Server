// Buffers
var buf = new Buffer.from('Hello', 'utf8');

console.log(buf); // gives the data in hex
console.log(buf.toString()); // gives the data as a string
console.log(buf.toJSON()); // gives the data as JSON

// you can treat the buffer as an array
console.log(buf[2]); // gives 'l' in hex

// you can write to buffer
buf.write("Pa"); //Overwrites. ("string here", start index). Cannot go over original buffer size. (Fixed Array)
console.log(buf.toString());

// See also ES6 JavaScript Typed Arrays