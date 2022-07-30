const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const elements = [];
ingredients.forEach((ingradient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingradient;
  liElement.classList.add("item");
  elements.push(liElement);
});

list.append(...elements);
