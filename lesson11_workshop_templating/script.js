const body = document.querySelector("body");

const cardBox = document.createElement("div");
cardBox.className = "card-box";

const data = JSON.parse(dataProducts);

data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const cardImg = document.createElement("img");
    cardImg.className = "card-img";
    cardImg.setAttribute("src", item.img);
    cardImg.setAttribute("alt", "product");
    card.append(cardImg);

    const cardDetails = document.createElement("div");
    cardDetails.className = "card-details";

    const nameProduct = document.createElement("h3");
    nameProduct.className = "name-product";
    nameProduct.textContent = item.name;
    cardDetails.append(nameProduct);

    const detailsProduct = document.createElement("ul");
    detailsProduct.className = "details-product";

    const price = document.createElement("li");
    price.className = "price";
    price.textContent = "Price: ";
    const valuePrice = document.createElement("span");
    valuePrice.textContent = `$ ${item.price}`;
    price.append(valuePrice);
    detailsProduct.append(price);

    const color = document.createElement("li");
    color.textContent = `Color: ${item.color}`;
    detailsProduct.append(color);

    const size = document.createElement("li");
    size.textContent = `Size: ${item.size}`
    detailsProduct.append(size);

    const quentity = document.createElement("li");
    quentity.className = "quentity";
    quentity.textContent = "Quentity: ";
    const valueQuentity = document.createElement("span");
    valueQuentity.textContent = item.quentity;
    quentity.append(valueQuentity);
    detailsProduct.append(quentity);

    cardDetails.append(detailsProduct);
    card.append(cardDetails);
    cardBox.append(card);
});


body.append(cardBox);