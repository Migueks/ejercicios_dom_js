// 2.1
const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

// 2.2
const newDiv = document.createElement("div");

const newParagraph = document.createElement("p");

newDiv.appendChild(newParagraph);

document.body.appendChild(newDiv);

// 2.3
const loopDiv = document.createElement("div");

for (let i = 1; i <= 6; i++) {
  const loopParagraph = document.createElement("p");
  loopDiv.appendChild(loopParagraph);
}

document.body.appendChild(loopDiv);

// 2.4
const textParagraph = document.createElement("p");

textParagraph.textContent = "Soy dinamico!";

document.body.appendChild(textParagraph);

// 2.5
const h2Title = document.querySelector("h2.fn-insert-here");

h2Title.innerHTML = "Wubba Lubba dub dub";

// 2.6
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ulList = document.createElement("ul");

apps.forEach((app) => {
  const listElement = document.createElement("li");
  listElement.textContent = app;
  ulList.appendChild(listElement);
});

document.body.appendChild(ulList);

// 2.7
const removeNodes = document.querySelectorAll(".fn-remove-me");

removeNodes.forEach((node) => {
  node.remove();
});

// 2.8
const writenParagraph = document.createElement("p");
writenParagraph.textContent = "Voy en medio!";

const container = document.body;

const divs = document.querySelectorAll("div:not([class])");
const firstDiv = divs[0];
const secondDiv = divs[1];

container.insertBefore(writenParagraph, secondDiv);
