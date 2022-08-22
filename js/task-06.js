const input = document.querySelector("input");
var colorEl = document.querySelector("#validation-input");

input.addEventListener("input", onBorderChange);

function onBorderChange(event) {
  //   event.preventDefault();
  //   console.dir(event.currentTarget.elements);
  //   console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === 6) {
    // console.log(event.length);
    colorEl.style.borderColor = "#4caf50";
  } else {
    colorEl.style.borderColor = "#f44336";
  }
}
