let todoList = [];

function addTodo() {
  let task = document.getElementById("task");
  let todos = task.value;
  //console.log(todos);
  todoList.push(todos);
  task.value = "";
  update();
}
function update() {
  let ulList = document.getElementById("ulList");
  ulList.innerHTML = "";

  for (let index = 0; index < todoList.length; index++) {
    const items = todoList[index];
    console.log(items);
    const list = document.createElement("li");
    list.innerText = items;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      ulList.removeChild(items);
    });

    list.appendChild(deleteBtn);
    ulList.appendChild(list);
  }
}
