//synchronous programming

const taskOne = () => {
  console.log("task1");
};
//async
const dataLoading = () => {
  console.log("task2.Data loading");
};

const taskOTwo = () => {
  setTimeout(dataLoading, 2000);
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
