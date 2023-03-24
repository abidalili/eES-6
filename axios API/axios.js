//axios

/*axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));*/

/*axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));*/

/*axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "fooma",
      body: "barma",
      userId: 1,
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));*/

/*axios
  .patch("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      title: "foomalilili",
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));*/

/*axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));*/

//async await
const makeRequest = async (config) => {
  return await axios(config);
};
/*const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
getData();*/
/*const postData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
postData();*/

//updateData
/*const updateData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "PUT",
    data: JSON.stringify({
      id: 1,
      title: "fooma",
      body: "barma",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
updateData();*/
//deleteData
const deleteData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "DELETE",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
deleteData();
