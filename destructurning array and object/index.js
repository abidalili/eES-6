//array destructure
let numbers = [20, 30, 40, 50, 60, 70];
let [num1, num2, num3, num4, num5] = numbers;
console.log(num1);

//swap variables
let a = 10,
  b = 20;

[a, b] = [b, a];
console.log(a);
console.log(b);
