// Files and fs (file system)
// Also see Error-first callback

var fs = require('fs');

var greet = fs.readFileSync(__dirname+'/greet.txt', 'utf8'); // syncronous

console.log(greet);

console.log("another read");

var greet2 = fs.readFile(__dirname+'/greet.txt', 'utf8', 

    // callback function goes here. Error first callback
    function(err, data) {

        if(err){
            console.log("ERROR. Handle here");
        } else {
            // got the data!
            console.log(data);
        }
        
    }

); // requires callback


console.log("Ready!");