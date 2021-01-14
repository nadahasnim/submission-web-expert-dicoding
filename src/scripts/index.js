/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
// import data from '../DATA.json';
// import { renderRestaurants } from './renderRestaurant';
import App from './views/app';

// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

// // data restaurant
// const listRestaurant = data.restaurants;

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#app'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// menu hamburger event listener
// menu.addEventListener('click', (event) => {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// menu.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter' || event.keyCode === 32) {
//     event.preventDefault();
//     event.stopPropagation();
//     drawer.classList.toggle('open');
//   }
// });

// hero.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// main.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// render list restaurant article on id posts
// renderRestaurants(listRestaurant, '#posts', '#headline');
