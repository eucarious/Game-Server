/* More about 'Require'
  JSON: Javascript Object Notation
  Interchanges data. Easy to read and write for both humans and machines

  consists of name value pairs...
  just like js objects, hence the name ;D
  ... and ordered lists of values

  {"name": "value", "name": "value", "name": "value"}

  JavaScript converts JSON to JavaScript Object
*/

var greet = require('./greet');
// node is smart, finds the folder (as long as there is no greet.js or greet.js native module)
greet.eng();
greet.esp();
greet.fin();