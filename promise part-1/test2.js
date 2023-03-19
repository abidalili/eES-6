// //how to create promise

// const promise1 = new Promise((resolve, reject) => {
//   let completedPromise = true;
//   if (completedPromise) {
//     resolve("completed promise 1");
//   } else {
//     reject("not completed promise 1");
//   }
// });
// //also just resolve or just reject can be use
// const promise2 = new Promise((resolve, reject) => {
//   resolve("completed promise 2");
// });
// // promise1
// //   .then((response) => {
// //     console.log(response);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // promise2.then((res) => console.log(res));

// //we can work with many promise together like
// Promise.all([promise1, promise2]).then((res) => console.log(res));

//promise race
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("completed promise3");
  }, 2000);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("completed promise4");
  }, 1000);
});
Promise.race([promise3, promise4]).then((res) => console.log(res));
