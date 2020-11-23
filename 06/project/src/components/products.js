
const url = 'https://raw.githubusercontent.com/byIlusion/GB-JS/lesson_06/Static/JSON/products.json';

function itemTemplate(item) {
  return `
    <div class="col-lg-4 col-sm-6">
      <div class="productUnit">
        <img src="${item.image}" alt="${item.title}">
        <div class="productName">${item.title}</div>
        <div class="productPrice">$${item.price}</div>
      </div>
    </div>`;
}

let catalog = initCatalog(url, itemTemplate, '.productsWrap');
catalog.init();
