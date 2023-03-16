//array destructure
/*let numbers = [20, 30, 40, 50, 60, 70];
let [num1, num2, num3, num4, num5] = numbers;
console.log(num1);

//swap variables
let a = 10,
  b = 20;

[a, b] = [b, a];
console.log(a);
console.log(b);*/

//  object destructure
/*const studentInfo1 = {
  id: 101,
  fullName: "abida lili",
  gpa: 3.92,
};
const { id, fullName } = studentInfo1;
console.log(id);
console.log(fullName);*/

//nested object destructure
// const studentInfo2 = {
//   id: 101,
//   fullName: "abida lili",
//   gpa: 3.92,
//   languages: {
//     native: "Bangla",
//     beginner: "english",
//   },
// };
// const { fullName, languages } = studentInfo2;
// console.log(fullName);
// console.log(languages.native);

//destructuring function parameter
// (general)

// const studentInfo3 = (student) => {
//   console.log(`${student.id}`, `${student.fullName}`);
// };
// const student = {
//   id: 101,
//   fullName: "abida lili",
// };
// studentInfo3(student);
//(destructure parameter)

const studentInfo4 = ({ id, fullName }) => {
  console.log(`${id}, ${fullName}`);
};

const student2 = {
  id: 101,
  fullName: "abida lili",
};
studentInfo4(student2);
