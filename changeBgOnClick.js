let redBtn = document.getElementById("red");
let greenBtn = document.getElementById("green");
let whiteBtn = document.getElementById("white");
let blueBtn = document.getElementById("blue");

redBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
  console.log("red click");
});

greenBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
  console.log("green click");
});

whiteBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  console.log("white click");
});

blueBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
  console.log("blue click");
});
