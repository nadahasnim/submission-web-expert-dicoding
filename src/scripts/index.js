import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";
import { renderRestaurants } from "../scripts/renderRestaurant";

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

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

// render list restaurant article on id posts
renderRestaurants(listRestaurant, "#posts", "#headline");
