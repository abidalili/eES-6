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
    reject("task Three is not completed");
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
// taskOne()
//   .then((res) => console.log(res))
//   .then(taskTwo)
//   .then((res) => console.log(res))
//   .then(taskThree)
//   .then((res) => console.log(res))
//   .then(taskFour)
//   .then((res) => console.log(res))
//   .then(taskFive)
//   .then((res) => console.log(res));
//.catch((err) => console.log(err));

//when we use async await the function should be asynchronous
//async await example

const callAllTAsks = async () => {
  try {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
    const t5 = await taskFive();
    console.log(t5);
  } catch (e) {
    console.log(e);
  }
};
callAllTAsks();
