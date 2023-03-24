//ajax- asynchonous javascriot and Xml
//jquery

const makeRequest = async (url, method, data) => {
  try {
    const result = await $.ajax({
      url: url,
      method: method,
      data: data,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};
/*const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "GET").then(
    (res) => console.log(res)
  );
};
getData();*/

//PostData
/*const createData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
    title: "foo",
    body: "bar",
    userId: 1,
  }).then((res) => console.log(res));
};
createData();*/

//update data
/*const updateData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
    id: 1,
    title: "fooma",
    body: "barmaa",
    userId: 1,
  }).then((res) => console.log(res));
};
updateData();*/

//deleteData
const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE").then(
    (res) => console.log(res)
  );
};
deleteData();
