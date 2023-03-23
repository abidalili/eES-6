console.clear();
//event- onload(),onerror()
//property-response, responseText,ResponseType,responseURL,status, statusText
//function-open(), send(), setRequestHeader()

const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.setRequestHeader("content-Type", "application/json");
  xhr.onload = () => {
    let data = xhr.response;
    console.log(JSON.parse(data));
  };
  xhr.onerror = () => {
    console.log("error is here");
  };
  xhr.send(JSON.stringify(data));
};
//getting data from API
/*const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
};
getData();*/
//send data to API

/*const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
};
sendData(); */

//updateData to API

/*const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "fooli",
    body: "barli",
    userId: 1,
  });
};
updateData(); */

//patch data for changing single data

/*const patchData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "fooli has changed",
  });
};
patchData();*/

//deleting data

const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};
deleteData();
