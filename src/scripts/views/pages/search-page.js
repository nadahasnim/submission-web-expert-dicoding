/* eslint-disable no-console */
import RestaurantApiSource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';

const SearchPage = {
  async render() {
    return `
        <h2>Search Page</h2>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantApiSource.searchRestaurant(url.id);

    console.log(restaurants);
  },
};

export default SearchPage;
