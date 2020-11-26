
function initBasket(url, f_tamplate) {
  return {
    url,
    f_tamplate,
    items: [],
    sum: 0,
    wrapperContainer: null,
    contentContainer: null,
    basketShowBtn: null,
    basketSumContainer: null,
    catalogContainer: null,

    async init() {
      this.wrapperContainer = document.querySelector('#basket-inner');
      this.contentContainer = document.querySelector('#basket-items');
      this.basketShowBtn = document.querySelector('#basket__show-btn');
      this.basketSumContainer = document.querySelector('#basket-sum');
      this.catalogContainer = catalog.wrapperContainer;
      let response = await axios({
        url: this.url,
        type: 'GET'
      });
      this.items = response.data;
      this._render();
      this._handleEvents();
    },

    _handleEvents() {
      this.basketShowBtn.addEventListener('click', e => {
        this.wrapperContainer.classList.toggle('hidden');
      });

      this.catalogContainer.addEventListener('click', e => {
        if (e.target.name === 'add-to-basket') {
          let item = this._getItem(e.target);
          this._addToBasket(item);
        }
      });

      this.contentContainer.addEventListener('click', e => {
        if (e.target.name === 'remove') {
          this._removeFromBasket(+e.target.dataset.id);
        }
      });
    },

    _getItem(target) {
      return {
        _id: +target.dataset.id,
        title: target.dataset.title,
        price: +target.dataset.price,
        amount: 1,
        image: target.dataset.image
      };
    },

    _addToBasket(item) {
      let inBasket = false;
      this.items.forEach(b => {
        if (b._id === item._id) {
          b.amount++;
          inBasket = true;
        }
      });
      if (!inBasket)
        this.items.push(item);
      this._render();
      console.log('Товар добавлен в корзину!');
    },

    _removeFromBasket(id) {
      this.items = this.items.filter(b => b._id !== id);
      this._render();
      console.log('Товар удален из корзины!');
    },

    _render() {
      this.sum = 0;
      let renderedItems = this.items.map(item => {
        this.sum += item.amount * item.price;
        return f_tamplate(item);
      });
      this.contentContainer.innerHTML = renderedItems.join('');
      this.basketSumContainer.innerText = this.sum;
    }
  };
}
