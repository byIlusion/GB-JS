
const catalog = {
  items: [],
  catalogContainer: null,

  init() {
    this.catalogContainer = document.querySelector('.productsWrap');
    this.items = fetchItems();
    this._render();
  },

  _render() {
    let renderedItems = this.items.map(item => itemTemplate(item));
    this.catalogContainer.innerHTML = renderedItems.join('');
  }
};

function fetchItems() {
  return TITLES.map((_, i) => createItem(i));
  // return Array.from(TITLES.keys()).map(i => createItem(i));
}

function createItem(i) {
  return {
    _id: i,
    title: TITLES[i],
    price: PRICES[i],
    image: 'product' + (i + 1) + '.jpg'
  };
}

