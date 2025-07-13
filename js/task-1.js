const listEl = document.querySelector("#categories");
const liEl = listEl.querySelectorAll(".item");

console.log(`Number of categories: ${liEl.length}`);

liEl.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const numOfElements = item.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${numOfElements}`);
});
