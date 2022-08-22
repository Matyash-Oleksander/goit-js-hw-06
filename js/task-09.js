const color = document.querySelector("body");
const span = document.querySelector(".color");
const btn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener("click", onBodyChangeColor);

function onBodyChangeColor(event) {
  color.style.backgroundColor = getRandomHexColor();
  span.textContent = `${getRandomHexColor()}`;
}
