const toDoItemsDiv = document.getElementsByClassName("to-do-items")[0];
let toDoItemsArray = [];

const input = document.getElementById("input");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addItem();
});

const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  addItem();
});

const clearItems = document.getElementById("clear-items");
clearItems.addEventListener("click", function () {
  removeItems();
});

function addItem() {
  let divParent = document.createElement("div");
  let divChild = document.createElement("div");
  let checkIcon = document.createElement("i");
  let editIcon = document.createElement("i");
  let trashIcon = document.createElement("i");
  let task_input = document.createElement("input");

  divParent.className = "item";

  // adds the input to the item div
  divParent.appendChild(task_input);

  task_input.value = input.value;
  task_input.type = "text";
  task_input.readOnly = true;

  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";

  checkIcon.addEventListener("click", function () {
    if (checkIcon.style.color === "lightgray") {
      checkIcon.style.color = "green";
      task_input.classList.add("checked");
    } else {
      checkIcon.style.color = "lightgray";
      task_input.classList.remove("checked");
    }
  });

  divChild.appendChild(checkIcon);

  editIcon.className = "fa-solid fa-pen-to-square";
  editIcon.style.color = "darkgray";

  editIcon.addEventListener("click", function () {
    if (task_input.readOnly === true) {
      task_input.readOnly = false;
      task_input.focus();
      task_input.style.color = "darkgreen";
      editIcon.className = "fa-regular fa-floppy-disk";
      editIcon.style.color = "darkgreen";
    } else {
      task_input.readOnly = true;
      task_input.style.color = "purple";
      editIcon.className = "fa-solid fa-pen-to-square";
      editIcon.style.color = "darkgray";
    }
  });

  divChild.appendChild(editIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(trashIcon);
  // How to remove trashed item?

  divParent.appendChild(divChild);

  toDoItemsDiv.appendChild(divParent);

  toDoItemsArray.push({ divParent: divParent, checkIcon: checkIcon });

  input.value = "";
}

function removeItems() {
  const todoItemsArrayDone = toDoItemsArray.filter(
    ({ checkIcon }) => checkIcon.style.color === "green"
  );

  todoItemsArrayDone.forEach((item) => {
    item.divParent.remove();
  });

  toDoItemsArray = toDoItemsArray.filter(
    ({ checkIcon }) => checkIcon.style.color != "green"
  );

  console.log(toDoItemsArray);
}
