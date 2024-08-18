// 3.1
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ulList = document.createElement("ul");

countries.forEach((countrie) => {
  const liElement = document.createElement("li");
  liElement.textContent = countrie;
  ulList.appendChild(liElement);
});

document.body.appendChild(ulList);

// 3.2

document.querySelector(".fn-remove-me").remove();

// 3.3

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const ulCars = document.createElement("ul");

cars.forEach((car) => {
  const liCar = document.createElement("li");
  liCar.textContent = car;
  ulCars.appendChild(liCar);
});

document.querySelector('[data-function="printHere"]').appendChild(ulCars);

// 3.4

const countriesObject = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const divContainers = document.createElement("div");

countriesObject.forEach((country) => {
  const divElement = document.createElement("div");

  const titleElement = document.createElement("h4");
  titleElement.textContent = country.title;
  divElement.appendChild(titleElement);

  const imageElement = document.createElement("img");
  imageElement.src = country.imgUrl;
  divElement.appendChild(imageElement);

  divContainers.appendChild(divElement);
});

document.body.appendChild(divContainers);
