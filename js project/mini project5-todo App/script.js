import { Todo } from "./classes.todo.js";

//select html elements

const todoForm = document.querySelector(".todoForm");
const todoInput = document.querySelector("#inputTodo");
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
const createTodo = (newTodo) => {
  const todoElement = document.createElement("li");
  todoElement.id = newTodo.todoId;
  todoElement.classList.add("li-style");
  todoElement.innerHTML = ` <span> ${newTodo.todoValue}</span>
  <span> <button class ='btn' id= 'deleteButton'><i class='fa fa-trash'></i></button>
  </span>`;
  TodoLists.appendChild(todoElement);

  const deleteButton = todoElement.querySelector("#deleteButton");
  deleteButton.addEventListener("click", deleteTodo);
};
//delete todo function

const deleteTodo = (event) => {
  const selectedTodo = event.target.parentElement.parentElement.parentElement;

  TodoLists.removeChild(selectedTodo);
  showMessage("todo is deleted", "danger");
  let todos = getTodosFromLocalStorage();
  todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
  localStorage.setItem("mytodos", JSON.stringify(todos));
};
//getTodosFromLocalStorage
const getTodosFromLocalStorage = () => {
  return localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];
};
//add todo function

const addTodo = (event) => {
  event.preventDefault();
  const todoValue = todoInput.value;

  //unique id generate
  const todoId = Date.now().toString();

  const newTodo = new Todo(todoId, todoValue);
  console.log(newTodo);
  createTodo(newTodo);
  showMessage("todo is added", "success");

  //adding todos to local storage
  const todos = getTodosFromLocalStorage();
  todos.push(newTodo);
  localStorage.setItem("mytodos", JSON.stringify(todos));
  todoInput.value = "";
};
//
const loadTodos = () => {
  const todos = getTodosFromLocalStorage();
  todos.map((todo) => createTodo(todo));
};

//adding listener
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);
