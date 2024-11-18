const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

// Função para salvar tarefas no localStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Função para carregar tarefas do localStorage
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    createTaskElement(task);
  });
}

// Função para criar o elemento de tarefa e adicionar ao DOM
function createTaskElement(value) {
  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);
}

// Carregar as tarefas salvas ao iniciar a página
loadTasks();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;

  // Cria o elemento de tarefa e adiciona ao DOM
  createTaskElement(value);

  // Salva a tarefa no localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(value);
  saveTasks(tasks);

  input.value = "";
});
