const fruits = ["apple", "mango", "banana", "grapes", "papaya"];
const fruitList = document.getElementById("fruit-list");

for (let index = 0; index < fruits.length; index++) {
  const items = fruits[index];
  console.log(items);
  const list = document.createElement("li");
  list.innerText = items;
  fruitList.appendChild(list);
}
