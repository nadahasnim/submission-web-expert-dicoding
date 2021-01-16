const FavoritePage = {
  async render() {
    return `
    <main id="maincontent">        
      <section class="content">
          <article class="headline" id="headline"></article>
          <div class="latest">
          <h1 class="latest__label">Favorite Restaurant</h1>
          <div class="posts" id="posts"></div>
          </div>
      </section>
    </main>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default FavoritePage;
