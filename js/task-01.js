//SubTask 1
const categories = document.querySelector("#categories").children;

console.log("Number of categories:", categories.length);

//Subtask 2
[...categories].forEach((category) => {
  const title = category.firstElementChild.textContent;
  const elementsCount = category.querySelector("ul").children.length;

  console.log("Category:", title);
  console.log("Elements:", elementsCount);
});
