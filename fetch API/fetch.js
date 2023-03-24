// 4 ways to call API - XMLHttpRequest, fetch, axios, jquery

// fetch() has replaced XMLHttpRequest
// fetch() - global method for making HTTP Request
// 2 ways to call- TouchEvent,async await

// +fetch() is easy to use compare to XMLHttpRequest
// +fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser

/*fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((res) => {
    if (!res.ok) {
      const message = `Error : {$res.status}`;
      throw new Error(message);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));*/

//async await

const makeRequest = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const message = `Error : {$res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
getData();
