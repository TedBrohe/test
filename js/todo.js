// Variables
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector('#todo-list');

const TODOS_KEY = "todos"

const savedTodos = localStorage.getItem(TODOS_KEY);
let todos = [];


// Functions
function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const target = event.target.parentElement;
    // todoList.removeChild(target);
    todos = todos.filter(item => String(item.id) !== target.id);
    // todos = todos.filter(item => item.id !== parseInt(target.id));
    saveTodos();
    target.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = '➖';
    button.addEventListener('click', deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj = {
        id : Date.now(),
        text : newTodo
    };
    todos.push(newTodoObj);
    saveTodos();
    paintTodo(newTodoObj);
    todoInput.value = "";
}


// Excution


todoForm.addEventListener('submit', handleTodoSubmit)

if (savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    for(i in parsedTodos) {
        paintTodo(parsedTodos[i]);
    }
}

