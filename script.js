const data = JSON.parse(dataProducts);

const body = document.querySelector("body");

const productsHeading = document.createElement("div");
productsHeading.className = "products-heading";
productsHeading.textContent = "Fetured Items";
body.append(productsHeading);

const productsText = document.createElement("p");
productsText.className = "text";
productsText.textContent = "Shop for items based on what we featured in this week";
body.append(productsText);

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

body.append(cardBox);
