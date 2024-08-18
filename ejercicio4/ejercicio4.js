// 4.1
const button = document.querySelector("#btnToClick");

button.addEventListener("click", (event) => {
  console.log(event);
});

// 4.2

const focus = document.querySelector("input.focus");

focus.addEventListener("focus", (event) => {
  console.log(event.target.value);
});

// 4.3

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    console.log(event.target.value);
  });
});

// 4.4

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ulAlbum = document.createElement("ul");

albums.forEach((album) => {
  const liAlbum = document.createElement("li");
  liAlbum.textContent = album;
  ulAlbum.appendChild(liAlbum);
});

document.body.appendChild(ulAlbum);
