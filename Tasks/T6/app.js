/* IIFE
  Immediately Invoked Function Expression
  Runs the MOMENT it is defined

  syntax: 

    (function(){
    Here comes all the content
    }(parameters));

  why do we do this?
    the variables!! it's all about the variables!!
*/

var firstName = "Maija";

(function(lastName){

    var firstName = "Matti";
    console.log(firstName); // Matti
    console.log(lastName); // Inserted parameter

}('Meikäläinen')); // '()' after the curly bracket is what defines an IIFE

console.log(firstName); // Maija

