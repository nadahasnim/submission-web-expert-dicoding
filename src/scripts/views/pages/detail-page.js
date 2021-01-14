/* eslint-disable no-console */
import RestaurantApiSource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';

const DetailPage = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantApiSource.detailRestaurant(url.id);

    console.log(restaurants);
  },
};

export default DetailPage;
