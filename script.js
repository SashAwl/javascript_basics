const data = JSON.parse(dataProducts);

const products = document.querySelector(".products");

/*  Блок товаров на главной странице*/

const productsHeading = document.createElement("div");
productsHeading.className = "products-heading";
productsHeading.textContent = "Fetured Items";
products.append(productsHeading);

const productsText = document.createElement("p");
productsText.className = "text";
productsText.textContent = "Shop for items based on what we featured in this week";
products.append(productsText);

const cardBox = document.createElement("div");
cardBox.className = "card-box";

data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const cardImgButton = document.createElement("div");
    cardImgButton.className = "card-img-button";

    const cardImg = document.createElement("img");
    cardImg.className = "card-img";
    cardImg.setAttribute("alt", "product");
    cardImg.setAttribute("src", item.img);
    cardImgButton.append(cardImg);

    const cardBack = document.createElement("div");
    cardBack.className = "card-back";

    const cardButton = document.createElement("button");
    cardButton.className = "card-button";
    cardButton.addEventListener("click", () => addProductCart(item));

    const imgBack = document.createElement("i");
    imgBack.className = "fa fa-shopping-cart";
    imgBack.setAttribute("aria-hidden", "true");
    imgBack.setAttribute("style", "color: white");
    cardButton.append(imgBack);

    const addToCart = document.createElement("span");
    addToCart.textContent = "Add to cart";
    cardButton.append(addToCart);
    cardBack.append(cardButton);
    cardImgButton.append(cardBack);
    card.append(cardImgButton);

    const cardText = document.createElement("div");
    cardText.className = "card-text";

    const cardHeading = document.createElement("h6");
    cardHeading.className = "card-heading";
    cardHeading.textContent = item.name;
    cardText.append(cardHeading);

    const cardDesc = document.createElement("p");
    cardDesc.className = "text";
    cardDesc.textContent = item.description;
    cardText.append(cardDesc);

    const cardPrice = document.createElement("p");
    cardPrice.className = "card-price";
    cardPrice.textContent = `$ ${item.price}`;
    cardText.append(cardPrice);

    card.append(cardText);
    cardBox.append(card);
});

products.append(cardBox);

const linkCatalog = document.createElement("button");
linkCatalog.className = "products__all-link";
linkCatalog.setAttribute("onclick", "document.location='catalog.html'");
linkCatalog.textContent = "Browse All Product";
products.append(linkCatalog);


/*  Блок товаров, добавленных в корзину, на главной странице*/

// productInCart() - возвращает добавленный в корзину товар с подробными данными

function productInCart({ img = "", name = "", price = "", color = "", size = "" }) {
    const cardInCart = document.createElement("div");
    cardInCart.className = "cardInCart";

    const cardInCartImg = document.createElement("img");
    cardInCartImg.className = "cardInCart-img";
    cardInCartImg.setAttribute("src", img);
    cardInCartImg.setAttribute("alt", "product");
    cardInCart.append(cardInCartImg);

    const cardInCartDetails = document.createElement("div");
    cardInCartDetails.className = "cardInCart-details";

    const nameProduct = document.createElement("h3");
    nameProduct.className = "name-product";
    nameProduct.textContent = name;
    cardInCartDetails.append(nameProduct);

    const detailsProduct = document.createElement("ul");
    detailsProduct.className = "details-product";

    const priceProduct = document.createElement("li");
    priceProduct.className = "price";
    priceProduct.textContent = "Price: ";
    const valuePrice = document.createElement("span");
    valuePrice.textContent = `$ ${price}`;
    priceProduct.append(valuePrice);
    detailsProduct.append(priceProduct);

    const colorProduct = document.createElement("li");
    colorProduct.textContent = `Color: ${color}`;
    detailsProduct.append(colorProduct);

    const sizeProduct = document.createElement("li");
    sizeProduct.textContent = `Size: ${size}`
    detailsProduct.append(sizeProduct);

    const quentityProduct = document.createElement("li");
    quentityProduct.className = "quentity";
    quentityProduct.textContent = "Quentity: ";
    const valueQuentity = document.createElement("input");
    valueQuentity.setAttribute("type", "number");
    valueQuentity.setAttribute("min", "1");
    valueQuentity.setAttribute("value", "1");
    quentityProduct.append(valueQuentity);
    detailsProduct.append(quentityProduct);

    cardInCartDetails.append(detailsProduct);
    cardInCart.append(cardInCartDetails);

    const removeProductImg = document.createElement("img");
    removeProductImg.src = "image/close.svg";
    removeProductImg.className = "remove-product";
    cardInCart.append(removeProductImg);

    removeProductImg.addEventListener("click", function (e) {
        removeProductImg.parentElement.remove();

        const isProductsCart = document.querySelector(".cardInCart");
        if (!isProductsCart) {
            const cartProducts = document.querySelector(".cart-products");
            cartProducts.remove();
        }
    })

    return cardInCart;
}

// addProductCart() - проверяет наличие блока Корзина на странице и при необходимости его добавляет, добавляет выбранный товар в этот блок

function addProductCart(product) {
    const cardProducts = document.querySelector(".cart-products");
    if (!cardProducts) {
        cartProducts = document.createElement("div");
        cartProducts.className = "cart-products container";

        const cartProductsHeading = document.createElement("h3");
        cartProductsHeading.className = "cart-products_heading";
        cartProductsHeading.textContent = "Cart Items";
        cartProducts.append(cartProductsHeading);

        const advantagesBlock = document.querySelector(".footer__top");
        advantagesBlock.after(cartProducts);
    }
    cartProducts.append(productInCart(product));
}