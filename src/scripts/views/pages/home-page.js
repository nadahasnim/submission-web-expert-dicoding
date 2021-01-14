import RestaurantApiSource from '../../data/restaurantapi-source';
import { createHeadlineItemTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">
            Kumpulan Restoran Terbaik Di Seluruh Indonesia
            </h1>
            <p class="hero__tagline">
            Temukan 1000+ rekomendasi restoran terbaik di seluruh penjuru
            indonesia
            </p>
            <div class="hero__search">
            <input
                class="hero__searchbox"
                type="text"
                name="search"
                id="searchRestaurant"
                placeholder="Cari lebih dari 1000+ restoran ..."
            />
            <button
                class="hero__searchbutton"
                type="button"
                name="searchButton"
                aria-label="button-cari"
            >
                Cari
            </button>
            </div>
        </div>
    </div>
    <main id="maincontent">        
        <section class="content">
            <article class="headline" id="headline"></article>
            <div class="latest">
            <h1 class="latest__label">Explore Restaurant</h1>
            <div class="posts" id="posts"></div>
            </div>
        </section>
    </main>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurants();
    const headlineContainer = document.querySelector('#headline');
    const postContainer = document.querySelector('#posts');

    restaurants.forEach((restaurant) => {
      postContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    headlineContainer.innerHTML = createHeadlineItemTemplate(restaurants[0]);
  },
};

export default HomePage;