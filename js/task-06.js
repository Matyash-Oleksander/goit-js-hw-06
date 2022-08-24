const input = document.querySelector("input");

input.addEventListener("blur", onBorderChange);

function onBorderChange(evt) {
  const inp = evt.currentTarget;
  const inpLength = Number(inp.dataset.length);

  if (inp.value.length === inpLength) {
    inp.classList.remove("invalid");
    inp.classList.add("valid");
  } else {
    inp.classList.remove("valid");
    inp.classList.add("invalid");
  }
}

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

// const refs = {
//   validationInput: document.querySelector("#validation-input"),
// };
// const testValid = (evt) => {
//   // if (evt.currentTarget.value === "") return;
//   evt.currentTarget.value.length = refs.validationInput.dataset.length
//     ? refs.validationInput.classList.add("invalid")
//     : refs.validationInput.classList.add("valid");

//   if (evt.currentTarget.value === "") {
//     refs.validationInput.classList.remove("invalid", "valid");
//   }
// };

// const resetValidation = (evt) =>
//   refs.validationInput.classList.remove("invalid", "valid");

// refs.validationInput.addEventListener("blur", testValid);
// refs.validationInput.addEventListener("focus", testValid);
