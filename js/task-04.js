// const counterValue = document.querySelector("#value");
// const clickLeftBtton = document.querySelector(
//   'button[data-action="decrement"]'
// );
// const clickRigthBtton = document.querySelector(
//   'button[data-action="increment"]'
// );
// console.log(counterValue.textContent);
// // console.log(clickLeftBtton.textContent);
// // console.log(clickRigthBtton.textContent);

// clickLeftBtton.addEventListener("click", () => {
//   console.log(`Hello`);
// });

// clickRigthBtton.addEventListener("click", () => {
//   counterValue.value = +1;
// });

// var counterValue = 0;
// function increment() {
//   counterValue += 1;
//   document.getElementById("value").innerHTML = counterValue;
// }
// function decrement() {
//   counterValue -= 1;
//   document.getElementById("value").innerHTML = counterValue;
// }

// Варіант №1
// const wrap_button = {
//   sub: document.querySelector("[data-action='increment']"),
//   add: document.querySelector("[data-action='decrement']"),
//   span: document.querySelector("#value"),
//   wrapper: document.querySelector("#counter "),
// };
// let counterValue = 0;
// const increment = () => {
//   counterValue += 1;

//   document.getElementById("value").textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;

//   document.getElementById("value").textContent = counterValue;
// };
// wrap_button.sub.addEventListener("click", increment);
// wrap_button.add.addEventListener("click", decrement);

// Варіант №2
const clickLeftBtton = document.querySelector(
  'button[data-action="decrement"]'
);
const clickRigthBtton = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById("value").textContent = counterValue;
};
clickRigthBtton.addEventListener("click", decrement);
clickLeftBtton.addEventListener("click", increment);
