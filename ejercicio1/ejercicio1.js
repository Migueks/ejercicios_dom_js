// 1.1
console.log(document.querySelector(".showme"));

// 1.2
console.log(document.querySelector("#pillado"));

// 1.3
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  console.log(paragraph);
});

// 1.4
const pokemons = document.querySelectorAll(".pokemon");

pokemons.forEach((pokemon) => {
  console.log(pokemon);
});

// 1.5
const attributes = document.querySelectorAll('[data-function="testMe"]');

attributes.forEach((attribute) => {
  console.log(attribute);
});

// 1.6
const users = document.querySelectorAll('[data-function="testMe"]');

const thirdUser = users[2];

console.log(thirdUser);
