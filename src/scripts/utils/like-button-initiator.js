/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
// import FavoriteMovieIdb from '../data/favoritemovie-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, movie }) {
    this._likeButtonContainer = likeButtonContainer;
    this._movie = movie;

    await this._renderButtonn();
  },

  async _renderButtonn() {
    const { id } = this._movie;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    // const movie = await FavoriteMovieIdb.getMovie(id);
    // return !!movie;
    return false;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // await FavoriteMovieIdb.putMovie(this._movie);
      this._renderButtonn();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      // await FavoriteMovieIdb.deleteMovie(this._movie.id);
      this._renderButtonn();
    });
  },
};

export default LikeButtonInitiator;