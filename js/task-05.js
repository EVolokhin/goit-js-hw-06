const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");
const defaultText = "Anonymous"

nameInput.addEventListener("input", (event) => {
  if (!nameInput.value) {
    nameOutput.textContent = defaultText;
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
});
