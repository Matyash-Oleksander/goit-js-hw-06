const input = document.querySelector("#font-size-control");
var fontSizeEl = document.querySelector("#text");

console.log(fontSizeEl.textContent);

input.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
  //   console.log(event.currentTarget.value);
  fontSizeEl.style.fontSize = `${event.currentTarget.value}px`;
}
