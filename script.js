// On app load, get all tasks from localStorage
window.onload = loadTask;

function loadTask() {
  // Get the tasks from localStorage and convert it to an array
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  // Loop through the tasks and add them to the list
  tasks.forEach((task) => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");

    li.innerHTML = ` <input type="checkbox" onclick="taskComplete(this)" class="check" ${
      task.completed ? "checked" : ""
    }/>
        <input type="text" value="${task.task}" class="task ${
      task.completed ? "completed" : ""
    }" onfocus="getCurrentTask(this)" onblur="editTask(this)">
        <i class="fa-solid fa-trash-can" onclick="removeTask(this)"></i>`;
    list.insertBefore(li, list.children[0]);
  });
}

function addTask() {
  const task = document.querySelector("form input");
  const list = document.querySelector("ul");

  if (task === "") {
    // return if task is empty
    alert("Please add some task");
    return false;
  }
  // check is task already exist
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  //task already exist
  tasks.forEach((todo) => {
    if (todo.task === task.value) {
      alert("Task already exist");
      task.value = "";
      return;
    }
  });

  //add task to localstorage
  l



}
