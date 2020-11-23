
const url = 'https://raw.githubusercontent.com/byIlusion/GB-JS/lesson_06/Static/JSON/catalog.json';

function createItemTemplate(item) {
    return `
        <div class="featuredItem">
            <div class="featuredImgWrap">
                <div class="featuredBuy">
                    <button name="add-to-basket">
                        <img src="../src/assets/img/addToCart.png" alt="">
                        Add to Cart
                    </button>
                </div>
                <img class="featuredProduct" src="${item.image}" alt="${item.title}">
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

let catalog = initCatalog(url, createItemTemplate, '#catalog');
catalog.init();
