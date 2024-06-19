let input = document.getElementById("input-task");
let ulList = document.getElementById("ul-list");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("click");
  let data = input.value;
  console.log("data", data);
  if (!data) {
    alert("fill task");
  } else {
    let todos = document.createElement("li");
    todos.innerText = data;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
      ulList.removeChild(todos);
    });

    todos.appendChild(deleteBtn);
    ulList.appendChild(todos);
    input.value = "";
  }
});
