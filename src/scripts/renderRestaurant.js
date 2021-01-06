import { createSummary } from "./createSummary";

export function renderRestaurants(list, postid, headlineid) {
  const posts = document.querySelector(postid);
  const headline = document.querySelector(headlineid);
  var count = 1;

  list.forEach((data) => {
    var description = createSummary(data.description, 200);

    if (count == 1) {
      var description = createSummary(data.description, 300);
      headline.innerHTML = `
        <figure class="headline__figure">
        <img src="${data.pictureId}" alt="${data.name}" />
        <figcaption>
          Rekomendasi Restoran Untuk Anda: ${data.name}
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
            <a aria-label="${data.name}" href="#">${data.name}</a>
          </h1>
          <p class="post-item__description">
            ${description}
          </p>
        </div>
      </article>           
        `;
  });
}
