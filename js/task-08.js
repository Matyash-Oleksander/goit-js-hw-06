// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   //   const formData = new FormData(event.currentTarget);
//   //   console.log(formData);

//   if (form.email.value === "" || form.password.value === "") {
//     console.log("Hе вистачає даних!!!");
//     alert("Заповніть всі поля!!!!");
//   } else {
//     const formEl = event.currentTarget.elements;
//     const login = {
//       email: formEl.email.value,
//       password: formEl.password.value,
//     };
//     console.log(`email, ${login.email}`);
//     console.log(`password, ${login.password}`);

//     console.log("");
//     console.log("");
//     form.reset();
//   }
// }

const checkForm = document.querySelector(".login-form");
console.log(checkForm);

checkForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const pass = event.currentTarget.elements.password.value;
  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((name, value) => {
    if (!name || !value) {
      alert("Hе вистачає даних!!!...");
    } else {
      data[value] = name;
    }
  });
  if (data.email && data.password) {
    console.log(data);
    event.currentTarget.reset();
  }
}
