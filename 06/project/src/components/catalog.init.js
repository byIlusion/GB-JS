
function initCatalog(url, f_tamplate, selector) {
  return {
    url,
    f_tamplate,
    selector,
    items: [],
    catalogContainer: null,

    async init() {
      this.catalogContainer = document.querySelector(this.selector);
      let response = await axios({
        url: this.url,
        type: 'GET'
      });
      this.items = response.data;
      this._render();
      this._handleEvents();
    },

    _handleEvents() {
      this.catalogContainer.addEventListener('click', e => {
        if (e.target.name === 'add-to-basket') {
          console.log('Товар добавлен!');
        }
      });
    },

    _addToBasket(item) {
      // pass
    },

    _render() {
      let renderedItems = this.items.map(item => f_tamplate(item));
      this.catalogContainer.innerHTML = renderedItems.join('');
    }
  };
}

