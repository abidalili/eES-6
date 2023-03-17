//Array method
//1.find(callback,value) return the value of the first element that pass certain condition
let numbers = [5, 55, 14, 66, 78, 47];
let firstEvenNumber = numbers.find((x) => x % 2 === 0);
console.log(firstEvenNumber);
//2.findIndex(callback,value) return the index of the first element that pass certain condition
let firstEvenNumberIndex = numbers.findIndex((x) => x % 2 === 0);
console.log(firstEvenNumberIndex);

//with object array
const students = [
  { id: 101, gpa: 2.5 },

  { id: 102, gpa: 3.52 },

  { id: 103, gpa: 4.5 },

  { id: 104, gpa: 3.5 },
];

const highestGpa = students.find((x) => x.gpa > 4);
console.log(highestGpa);
