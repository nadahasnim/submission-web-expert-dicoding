import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

console.log("Hello Coders! :)");

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");
const posts = document.querySelector("#posts");

//data restaurant
const listRestaurant = data.restaurants;

//menu hamburger event listener
menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

menu.addEventListener("keypress", function (event) {
  if (event.key === "Enter" || event.keyCode === 32) {
    event.preventDefault();
    event.stopPropagation();
    drawer.classList.toggle("open");
  }
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});

// render list restaurant article
listRestaurant.forEach((data) => {
  var description = data.description;
  if (description.length > 200) {
    description = description.slice(0, 200);
    description += " ...";
  }

  posts.innerHTML += `
    <article class="post-item">
    <img
      class="post-item__thumbnail"
      src="${data.pictureId}"
      alt="${data.name}"
    />
    <div class="post-item__city">
      <p>Kota ${data.city}</p>
    </div>
    <div class="post-item__content">
      <p class="post-item__rating">Rating:</p>
      <p class="post-item__rating_value">${data.rating}</p>
      <h1 class="post-item__title">
        <a href="#">${data.name}</a>
      </h1>
      <p class="post-item__description">
        ${description}
      </p>
    </div>
  </article>           
    `;
});
