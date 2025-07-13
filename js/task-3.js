const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputName = (e) => {
  const greetingName = input.value.trim();
  output.textContent = greetingName === "" ? "Anonymous" : greetingName;
};

input.addEventListener("input", inputName);
