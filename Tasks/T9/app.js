// Native modules 
// https://nodejs.org/docs/latest/api/
// be careful that you don't have native module name overlaps!
// e.g. require('util'); to grab util.js from native modules

var util = require('util');

var txt = 'Congratulate %s for surviving %d hours today!';
var result = util.format(txt, 'Yourself', 6);

console.log(result); 