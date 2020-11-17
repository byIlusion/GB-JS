const TITLES = [
  'UNO MAN T-SHIRT',
  'DOS MAN T-SHIRT',
  'TRES MAN T-SHIRT',
  'CUATRO MAN T-SHIRT',
  'CINCO MAN T-SHIRT',
  'SIES MAN T-SHIRT',
  'SIETE MAN T-SHIRT',
  'OCHO MAN T-SHIRT',
  'NUEVE MAN T-SHIRT'
];
const PRICES = [
  112,
  89.55,
  99.99,
  12.7,
  25,
  35,
  79.99,
  134,
  13.9
];

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

catalog.init();

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

function itemTemplate(item) {
  return `
    <div class="col-lg-4 col-sm-6">
      <div class="productUnit">
        <img src="../src/assets/img/${item.image}" alt="${item.title}">
        <div class="productName">${item.title}</div>
        <div class="productPrice">$${item.price}</div>
      </div>
    </div>`;
}
