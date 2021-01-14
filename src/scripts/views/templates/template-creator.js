import CONFIG from '../../globals/config';
import SummaryHelper from '../../utils/summary-helper';

const createRestaurantDetailTemplate = (movie) => `
    <h2 class="movie__title">${movie.title}</h2>
    <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
    <div class="movie__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
    </div>
    <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => {
  const description = SummaryHelper.createSummary(restaurant.description, 250);

  return `
      <article class="post-item">
        <img
          class="post-item__thumbnail"
          src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}"
          alt="${restaurant.name}"
        />
        <div class="post-item__city">
          <p>Kota ${restaurant.city}</p>
        </div>
        <div class="post-item__content">
          <p class="post-item__rating">Rating:</p>
          <p class="post-item__rating_value">${restaurant.rating}</p>
          <h1 class="post-item__title">
            <a aria-label="${restaurant.name}" href="#">${restaurant.name}</a>
          </h1>
          <p class="post-item__description">
            ${description}
          </p>
        </div>
      </article>
    `;
};

const createHeadlineItemTemplate = (restaurant) => {
  const description = SummaryHelper.createSummary(restaurant.description, 300);

  return `
    <figure class="headline__figure">
      <img src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" />
      <figcaption>
        Rekomendasi Restoran Untuk Anda: ${restaurant.name}
      </figcaption>
    </figure>
    <div class="headline__content">
      <h1 class="headline__title">#restopedia : Kelezatan Khas Nusantara</h1>
      <p class="headline__description">
          ${description}
      </p>
      <button aria-label="headline-read-more" class="headline__button">Read More</button>
    </div>
    `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createHeadlineItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
