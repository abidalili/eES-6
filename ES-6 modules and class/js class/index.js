//js class
class student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  //set value
  set studentName(name) {
    this.name = name;
  }
  //get value
  get studentInfo() {
    return this.id + " " + this.name;
  }
}

let s1 = new student(100, "abida");
let s2 = new student(101, "aktar");
console.log(s1);

s1.studentName = "mini";
console.log(s1.name);
console.log(s1.studentInfo);
