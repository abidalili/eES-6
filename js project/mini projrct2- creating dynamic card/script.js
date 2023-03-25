//dummy data
// const posts = [
//   {
//     title: "this is Title 1",
//     body: "this is Body 1",
//   },
//   {
//     title: "this is Title 2",
//     body: "this is Body 2",
//   },
//   {
//     title: "this is Title 3",
//     body: "this is Body 3",
//   },
//   {
//     title: "this is Title 4",
//     body: "this is Body 4",
//   },
//   {
//     title: "this is Title 5",
//     body: "this is body 5",
//   },
//   {
//     title: "This is title 6",
//     body: "this is Body 6",
//   },
//   {
//     title: "this is Title 7",
//     body: "this is Body 7",
//   },
//   {
//     title: "this is Title 8",
//     body: "this is Body 8",
//   },
// ];

/* <div class="post">
        <h4 class="post-title">Post title 1</h4>
        <p class="post-body">post description 1</p>
      </div> */

//axios api fetch Data
const fetchData = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch (err) {
    throw Error("data is not fetched");
  }
};

// selection;
const postsElement = document.querySelector(".posts");

const loadAllData = async () => {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = ` <h4 class="post-title">${post.title} </h4>
    <p class="post-body">${post.body} </p>`;
    postsElement.appendChild(postElement);
  });
};
loadAllData();
