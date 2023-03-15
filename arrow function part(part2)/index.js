var students = [
  {
    id: 100,
    name: "abida aktar",
    gpa: 3.91,
  },
  {
    id: 101,
    name: "poly aktar",
    gpa: 2.91,
  },
  {
    id: 102,
    name: "joly aktar",
    gpa: 4.99,
  },
  {
    id: 103,
    name: "mily aktar",
    gpa: 2.61,
  },
  {
    id: 104,
    name: "sheli aktar",
    gpa: 3.71,
  },
];
//name who got above 3
//traditional function
function studentNames1() {
  return students
    .filter(function (x) {
      return x.gpa > 3;
    })
    .map(function (y) {
      return y.name;
    });
}

//arrow function
const studentNames2 = () =>
  students.filter((x) => x.gpa > 3).map((y) => y.name);
// console.log(studentNames1());
console.log(studentNames2());
