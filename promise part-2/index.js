//promise chaining
const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task one is completed");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task Two is completed");
    }, 2000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    resolve("task Three is completed");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task Four is completed");
  });
};
const taskFive = () => {
  return new Promise((resolve, reject) => {
    resolve("task Five is completed");
  });
};
taskOne()
  .then((res) => console.log(res))
  .then(taskTwo)
  .then((res) => console.log(res))
  .then(taskThree)
  .then((res) => console.log(res))
  .then(taskFour)
  .then((res) => console.log(res))
  .then(taskFive)
  .then((res) => console.log(res));
