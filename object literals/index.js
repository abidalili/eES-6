//object literals
// function studentInfo1(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// console.log(studentInfo1("abida lili", 26));

//consize method

//normall method of writting function inside object:
// let message = {
//   body: function () {
//     return `hi,im object function`;
//   },
// };
// console.log(message.body());

//consize method(doesnot need to write semicolon and the keyword "function")
/*let message2 = {
  functionName() {
    return `hi,im object function`;
  },
};
console.log(message2.functionName());*/

// here we can use function name with space with es6
let message = {
  "message two"() {
    return `hi,im object function`;
  },
};
console.log(message["message two"]());
