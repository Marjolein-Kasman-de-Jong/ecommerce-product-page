const [brand, productName, description, finalPrice, discount, originalPrice, productID] =
    ["brand", "name", "description", "final-price", "discount", "original-price", "product-id"]
        .map(id => document.getElementById(id));

export function setProductDetails(product) {
    brand.textContent = product.brand;
    productName.textContent = product.name;
    description.textContent = product.description;
    finalPrice.textContent = `$${(product.price * (1 - product.discount / 100)).toFixed(2)}`;
    discount.textContent = `${product.discount}%`;
    originalPrice.textContent = `$${product.price.toFixed(2)}`;
    productID.value = product.name;
};