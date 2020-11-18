let TITLES = [
    'MANGO PEOPLE T-SHIRT',
    'BANANA PEOPLE T-SHIRT',
    'TOMATO PEOPLE T-SHIRT',
    'POTATO PEOPLE T-SHIRT',
    'CABBAGE PEOPLE T-SHIRT',
    'KIWI PEOPLE T-SHIRT',
    'PERSIMMON PEOPLE T-SHIRT',
    'ORANGE PEOPLE T-SHIRT',
];
let PRICES = [60, 82, 39.4, 69.69, 70, 54, 21, 49.1];


const catalog = {
    items: [],
    container: null,

    init() {
        //вот тут будет происходить всякая стартовая штука
        this.container = document.querySelector('#catalog');
        this.items = fetchItems();
        this._render();
    },
    _render() {
        let catalogTemplate = '';
        this.items.forEach((item, index) => {
            catalogTemplate += createItemTemplate(item, index);
        });
        this.container.innerHTML = catalogTemplate;
    }
}


catalog.init();


function fetchItems() {
    let items = [];

    for (let i = 0; i < TITLES.length; i++) {
        items.push(createItem(i));
    }

    return items;
}


function createItem(ind) {
    return {
        _id: 'cat_' + ind,
        title: TITLES[ind],
        price: PRICES[ind]
    }
}

function createItemTemplate(item, index) {
    let imgSrc = `../src/assets/img/featuredItem${index + 1}.jpg`;
    return `
        <div class="featuredItem">
            <div class="featuredImgWrap">
                <div class="featuredBuy">
                    <button>
                        <img src="../src/assets/img/addToCart.png" alt="">
                        Add to Cart
                    </button>
                </div>
                <img class="featuredProduct" src="${imgSrc}" alt="">
            </div>
            <div class="featuredNameAndPrice">
                <div class="featuredItemName">
                    ${item.title}
                </div>
                <div class="featuredItemPrice">$${item.price}</div>
            </div>
        </div>
    `;
}