const formEl = document.querySelector(".login-form");

const submitFormEl = (e) => {
  e.preventDefault();
  const { email, password } = formEl.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  const userData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(userData);
  formEl.reset();
};

formEl.addEventListener("submit", submitFormEl);
