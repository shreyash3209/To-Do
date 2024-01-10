const add = document.querySelector("button");
const text = document.getElementById("text");
const listContainer = document.querySelector(".container");

let cont = true;

function deleteTask() {
  const del = document.querySelectorAll(".delete");
  const taskList = document.querySelector(".task-list");
  del.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentNode.parentNode.remove();
    });
  });
}

function taskCompleted() {
  const currentTask = document.querySelectorAll(".currentTask");
  for (let i = 0; i < currentTask.length; i++) {
    currentTask[i].addEventListener("click", function () {
      currentTask[i].classList.toggle("taskCompleted");
    });
  }
}

function toDoList() {
  if (text.value === "") {
    alert("First Add Your Task");
  } else {
    const task = `<div class="task-list">
                    <ol id="list"></ol>
                  </div>`;

    if (cont) {
      listContainer.insertAdjacentHTML("beforeend", task);
      cont = false;
    }
    const list = document.getElementById("list");
    const html = `<li>
                    <div class='listContent'>
                      <div class="currentTask">${text.value}</div>
                      <button class="delete">
                      <ion-icon name="trash-outline"></ion-icon>
                      </button>
                    </div>
                  </li>`;

    list.insertAdjacentHTML("beforeend", html);
    text.value = "";

    deleteTask();
    taskCompleted();
  }
}

add.addEventListener("click", toDoList);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    toDoList();
  }
});
