//hoisting(In JavaScript, a variable can be declared after it has been used but its only for var variable or keyword
// not for const or let )
//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)
// x = 20;
// console.log(x);
// var x;

//const(this code will not run and will show a syntaxError)
// carName = "Volvo";
// console.log(carName);
// const carName;

// //let(same for let keyword here the code will not run and show ReferenceError)
// carName = "Volvo";
// console.log(carName);
// let carName;

//Initializations (when js variable are declare and initialize before it is use)
//JavaScript only hoists declarations, not initializations

// var x = 5; // Initialize x
// var y = 7; // Initialize y
// var sum = x + y;
// console.log(sum);

//strict

// ("use strict");
// x = 3.14; //(this will show error cz variable x is not declared,but if we dont use strict it will run and show result bt we dont want this to happen)
// console.log(x);

// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// clared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
//  Example
//  "use strict";
// myFunction();

// function myFunction() {
//   y = 3.14;   // This will also cause an error because y is not declared
// }
// Declared inside a function, it has local scope (only the code inside the function is in strict mode):
// Example

// function myFunction() {
//   "use strict";
//   y = 3.14;   // This will cause an error
// }
