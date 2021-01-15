import RestaurantApiSource from '../../data/restaurantapi-source';
import UrlParser from '../../routes/url-parser';
import AddReviewInitiator from '../../utils/add-review-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createFoodItem,
  createRestaurantDetailTemplate,
  createCategoryItem,
  createDrinkItem,
  createReviewCustomerContainer,
  createRestaurantListAside,
  createRestaurantListItem,
  create404Error,
} from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `
        <div class="breadcrumb-container">
          <ul class="breadcrumb">
            <li><a href="#/home">Home</a></li>
            <li><a href="#/detail/">Detail</a></li>
            <li><a id="detailLink" href="#/detail/"></a></li>            
          </ul>
        </div>
        <main id="maincontent">        
          <div class="detail-container"></div>
        </main>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
      const restaurants = await RestaurantApiSource.listRestaurants();
      const { categories, customerReviews } = restaurant;
      const { foods, drinks } = restaurant.menus;

      // render detail
      const detailContainer = document.querySelector('.detail-container');
      detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      // render category
      let iteration = 1;
      const categoryContainer = document.querySelector('#category');
      categories.forEach((category) => {
        if (iteration === 1) {
          categoryContainer.innerHTML += createCategoryItem(category);
        } else {
          categoryContainer.innerHTML += `, ${createCategoryItem(category)}`;
        }

        iteration += 1;
      });

      // render foodlist
      const foodList = document.querySelector('#food-list');
      foods.forEach((food) => {
        foodList.innerHTML += createFoodItem(food);
      });

      // render drinklist
      const drinkList = document.querySelector('#drink-list');
      drinks.forEach((drink) => {
        drinkList.innerHTML += createDrinkItem(drink);
      });

      // render review container
      detailContainer.innerHTML += createReviewCustomerContainer(customerReviews);

      // render recomended restaurant
      detailContainer.innerHTML += createRestaurantListAside();

      // render restaurant list
      const restaurantList = document.querySelector('#aside-restaurant-list');
      iteration = 1;
      restaurants.forEach((restaurantItem) => {
        if (iteration > 6) {
          return;
        }

        restaurantList.innerHTML += createRestaurantListItem(restaurantItem);

        iteration += 1;
      });

      // render detail link
      const detailLink = document.querySelector('#detailLink');
      detailLink.href = `#/detail/${restaurant.id}`;
      detailLink.innerHTML = restaurant.name;

      AddReviewInitiator.init({
        reviewButton: document.querySelector('#button-review'),
        inputName: document.querySelector('#name-input'),
        inputReview: document.querySelector('#review-input'),
        reviewListContainer: document.querySelector('#review-list'),
        id: url.id,
      });

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        movie: {
          id: restaurant.id,
          title: restaurant.name,
          overview: restaurant.description,
          backdrop_path: restaurant.pictureId,
          vote_average: restaurant.rating,
        },
      });
    } catch (error) {
      // render detail
      const detailContainer = document.querySelector('.detail-container');
      detailContainer.innerHTML = create404Error();

      // render detail link error
      const detailLink = document.querySelector('#detailLink');
      detailLink.href = '#/home';
      detailLink.innerHTML = 'error 404 not found';
    }
  },
};

export default DetailPage;
