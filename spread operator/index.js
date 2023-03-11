// spread operator(The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.)
//Example(concating)
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];

//concatinate object usung spread operator
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);

// //
// function addNumbers(x, y, z) {
//   return x + y + z;
// }
// let numbers = [1, 2, 3];
// // console.log(addNumbers(...numbers));

// //adding more array numbers in  new array
// let numbers1 = [5, 6, ...numbers];
// console.log(numbers1);
