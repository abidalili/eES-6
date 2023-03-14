// for each map and filter
//forEach
// var numbers = [2, 3, 4, 5];
// var squareNumber = [];

// numbers.forEach(function (x) {
//   squareNumber.push(x * x);
// });
// console.log(squareNumber);

//map
// var numbers = [2, 3, 4, 5];
// var squareNumber = numbers.map(function (x) {
//   return x * x;
// });
// console.log(squareNumber);

//filter based on a condition

var numbers = [2, 3, 4, 5, 40, 50, 32, 43];
var newNumbers = numbers.filter(function (x) {
  return x > 10;
});
console.log(newNumbers);
