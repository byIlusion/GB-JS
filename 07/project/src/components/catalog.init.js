
function initCatalog(url, f_tamplate, selector) {
  return {
    url,
    f_tamplate,
    selector,
    items: [],
    wrapperContainer: null,

    async init() {
      this.wrapperContainer = document.querySelector(this.selector);
      let response = await axios({
        url: this.url,
        type: 'GET'
      });
      this.items = response.data;
      this._render();
    },

    _render() {
      let renderedItems = this.items.map(item => f_tamplate(item));
      this.wrapperContainer.innerHTML = renderedItems.join('');
    }
  };
}

