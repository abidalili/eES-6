// //callback and higher order function
// function square(x) {
//   console.log(`square of ${x}: ${x * x}`);
// }
// square(5);
// // const y = square;
// // y(8);

// function higherOrderFunction(num, callback) {
//   callback(num);
// }
// higherOrderFunction(6, square);

const taskOne = (callback) => {
  console.log("task1");
  callback();
};

const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("task2.Data loading");
    callback();
  }, 2000);
};

const taskThree = (callback) => {
  console.log("task3");
  callback();
};
const taskFour = () => {
  console.log("task4");
};

taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      taskFour();
    });
  });
});

document.querySelector("button").addEventListener("click", () => {
  console.log("button is clicked");
}); //it is an example of async programming
