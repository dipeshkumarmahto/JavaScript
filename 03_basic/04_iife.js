/*  IIFE in JavaScript

IIFE = Immediately Invoked Function Expression

It is a function that is created and executed immediately.

Basic Syntax
(function() {
    console.log("Hello World");
})();

Output:
Hello World


(function(){}) → converts the function into an expression

() → immediately calls/invokes the function


*/

(function chain(){
    console.log(`DB Connected`)  //DB Connected
})();  // we have to stop by using ;, otherwise next iife not run.


(function aurcode(){
    console.log(`DB Connected two time`)   //  DB Connected two time
})()


