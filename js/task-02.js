const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientEl = document.querySelector("#ingredients");
// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement("li");
//   li.textContent = ingredients[i];
//   li.classList.add("item");
//   ingredientEl.appendChild(li);
// }

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  // console.log(li);
  li.textContent = ingredient;
  li.classList.add("item");
  ingredientEl.appendChild(li);
});
