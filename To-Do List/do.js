const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const clearTaskBtn = document.getElementById("clearTaskBtn");

// initialize tasks array
let tasks = [];

// load tasks from localStorage
if (localStorage.getItem("tasks")) {
 tasks = JSON.parse(localStorage.getItem("tasks"));
}

// display tasks in HTML
function displayTasks() {
 taskList.innerHTML = "";
 for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];
  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;
  
  checkbox.addEventListener("change", function() {
   tasks[i].done = checkbox.checked;
   saveTasks();
  });

  const span = document.createElement("span");
  span.innerHTML = task.text;
  if (task.done) {
   span.style.textDecoration = "line-through";
  }
  
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  
  editBtn.addEventListener("click", function() {
   const newText = prompt("Edit Task", task.text);
   if (newText) {
    tasks[i].text = newText;
    saveTasks();
   }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  
  deleteBtn.addEventListener("click", function() {
   tasks.splice(i, 1);
   saveTasks();
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(span);
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);
 }
}

// add new task to tasks array and display it on the HTML
function addTask(event) {
 event.preventDefault();
 const taskText = taskInput.value.trim();
 if (taskText) {
  tasks.push({text: taskText, done: false});
  saveTasks();
  
  taskInput.value = "";
  displayTasks();
 }
}

// clear all the tasks and remove them from HTML
function clearTasks(event) {
 event.preventDefault();
 tasks = [];
 saveTasks();
 
 displayTasks();
}

// save tasks to localStorage
function saveTasks() {
 localStorage.setItem("tasks", JSON.stringify(tasks));
}

// add "submit" listener to the form
addTaskBtn.addEventListener("click", addTask);
clearTaskBtn.addEventListener("click", clearTasks);

// display initial tasks
displayTasks();