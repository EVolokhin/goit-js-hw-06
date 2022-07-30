const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  if (!validationInput.value) {
    validationInput.classList.remove("invalid");
    validationInput.classList.remove("valid");
    return;
  }
  if (validationInput.value.length === +validationInput.dataset.length) {
    console.log("green");
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    console.log("red");
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
