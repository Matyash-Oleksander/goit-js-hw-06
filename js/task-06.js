// const input = document.querySelector("input");
// var colorEl = document.querySelector("#validation-input");

// input.addEventListener("input", onBorderChange);

// function onBorderChange(event) {
//   //   event.preventDefault();
//   //   console.dir(event.currentTarget.elements);
//   //   console.log(event.currentTarget.value.length);
//   if (event.currentTarget.value.length === 6) {
//     // console.log(event.length);
//     // colorEl.classList.replace(".validation-input", ".validation-input.valid");
//     colorEl.style.borderColor = "#4caf50";
//   } else {
//     // colorEl.classList.add("#validation-input.invalid");
//     colorEl.style.borderColor = "#f44336";
//   }
// }

const refs = {
  validationInput: document.querySelector("#validation-input"),
};
const testValid = (evt) => {
  if (evt.currentTarget.value === "") return;
  evt.currentTarget.value.length > refs.validationInput.dataset.length
    ? refs.validationInput.classList.add("invalid")
    : refs.validationInput.classList.add("valid");

  // if (evt.currentTarget.value === "") {
  //   refs.validationInput.classList.remove("invalid", "valid");
  // }
};

const resetValidation = (evt) =>
  refs.validationInput.classList.remove("invalid", "valid");

refs.validationInput.addEventListener("blur", testValid);
refs.validationInput.addEventListener("focus", testValid);
