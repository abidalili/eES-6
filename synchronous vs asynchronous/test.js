//synchronous programming

const taskOne = () => {
  console.log("task1");
};

const taskOTwo = () => {
  setTimeout(() => {
    console.log("task2.Data loading");
  }, 2000);
};

const taskThree = () => {
  console.log("task3");
};
const taskFour = () => {
  console.log("task4");
};

taskOne();
taskOTwo();
taskThree();
taskFour();
