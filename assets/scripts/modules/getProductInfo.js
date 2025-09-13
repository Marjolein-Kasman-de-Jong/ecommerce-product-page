const [product, brand, productName, description, finalPrice, discount, originalPrice, productID] =
    ["product", "brand", "name", "description", "final-price", "discount", "original-price", "product-id"]
        .map(id => document.getElementById(id));

const id = Number(product.dataset.id);

async function loadData(id) {
    const response = await fetch('./data/products.json');

    if (!response.ok) {
        throw new Error(`HTTP error! ${response.status}`);
    }

    const data = await response.json();

    const product = data.find(item => item.id === id);

    if (!product) {
        throw new Error(`Geen product gevonden met id ${id}`);
    }

    return product;
};

function setProductInfo(product) {
    brand.textContent = product.brand;
    productName.textContent = product.name;
    description.textContent = product.description;
    finalPrice.textContent = `$${(product.price * (1 - product.discount / 100)).toFixed(2)}`;
    discount.textContent = `${product.discount}%`;
    originalPrice.textContent = `$${product.price.toFixed(2)}`;
    productID.value = product.name;
};

loadData(id).then(product => {
    setProductInfo(product);
});