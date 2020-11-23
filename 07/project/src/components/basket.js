
const urlBasket = 'https://raw.githubusercontent.com/byIlusion/GB-JS/lesson_06/Static/JSON/catalog.json';

function createBasketTemplate(item) {
  return `
    <div class="cart_item">
      <img src="${item.image}" alt="product">
      <div class="cart_descr">
          <div class="cart_title">${item.title}</div>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
          </div>
          <div class="cart_price">${item.amount} x $${item.price}</div>
      </div>
      <a href="#" class="cart_close fas fa-times-circle" name="remove" data-id="${item._id}"></a>
      <hr>
    </div>
  `;
}

let basket = initBasket(urlBasket, createBasketTemplate, '#basket-inner');
catalog.init();
