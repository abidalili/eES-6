//select html elements
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector("#inputTodo");
const TodoAddButton = document.querySelector("#addTodoButton");
const TodoLists = document.getElementById("lists");
const messageElement = document.getElementById("message");

//showMessage
const showMessage = (text, status) => {
  messageElement.textContent = text;
  messageElement.classList.add(`bg-${status}`);
  setTimeout(() => {
    messageElement.textContent = "";
    messageElement.classList.remove(`bg-${status}`);
  }, 1000);
};

//create todo
const createTodo = (todoId, todoValue) => {
  const todoElement = document.createElement("li");
  todoElement.id = todoId;
  todoElement.classList.add("li-style");
  todoElement.innerHTML = ` <span> ${todoValue}</span>
  <span> <button class ='btn' id= 'deleteButton'><i class='fa fa-trash'></i></button>
  </span>`;
  TodoLists.appendChild(todoElement);
};

//add todo function

const addTodo = (event) => {
  event.preventDefault();
  const todoValue = todoInput.value;

  //unique id generate
  const todoId = Date.now().toString();
  createTodo(todoId, todoValue);
  showMessage("todo is added", "success");

  //adding todos to local storage
  const todos = localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];
  todos.push({ todoId, todoValue });
  localStorage.setItem("mytodos", JSON.stringify(todos));
  todoInput.value = "";
};

//adding listener
todoForm.addEventListener("submit", addTodo);
