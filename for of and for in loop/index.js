// for...of and for...in

// for...of

// const names = ["s1", "s2", "s3"];
// for (let name of names) {
//   console.log(name);
// }

//for..in(it is use for iterate object, so this one is very important)

let students = {
  id: 100,
  name: "abida lili",
  cgpa: 3.91,
};
for (let x in students) {
  console.log(students[x]);
}
