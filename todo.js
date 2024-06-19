let input = document.getElementById("input-task");
let ulList = document.getElementById("ul-list");
let btn = document.getElementById("btn");

btn.addEventListener("click", update);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    update();
  }
});
// test comment
function update() {
  console.log("click");
  let data = input.value;
  console.log("data", data);
  if (!data) {
    alert("fill task");
  } else {
    let todos = document.createElement("li");
    todos.innerText = data;
    todos.className = "todos";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deletebtn";

    deleteBtn.addEventListener("click", function () {
      ulList.removeChild(todos);
    });

    todos.appendChild(deleteBtn);
    ulList.appendChild(todos);
    input.value = "";
  }
}
