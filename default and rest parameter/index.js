// default parameters

// If y is not passed or undefined, then y = 10.

// function myFunction(x, y = 10) {
//   return x + y;
// }
// myFunction(5);

// Function Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

// Example
function sum(x, y, ...z) {
  console.log(`${x},${y},${z}`);
}

sum(4, 9, 16, 25, 29, 100, 66, 77);
