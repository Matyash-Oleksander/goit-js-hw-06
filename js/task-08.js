const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  //   const formData = new FormData(event.currentTarget);
  //   console.log(formData);

  if (form.email.value === "" || form.password.value === "") {
    console.log("Hе вистачає даних!!!");
    alert("Заповніть всі поля!!!!");
  } else {
    const formEl = event.currentTarget.elements;
    const login = {
      email: formEl.email.value,
      password: formEl.password.value,
    };
    console.log(`email, ${login.email}`);
    console.log(`password, ${login.password}`);

    console.log("");
    console.log("");
    form.reset();
  }
}
