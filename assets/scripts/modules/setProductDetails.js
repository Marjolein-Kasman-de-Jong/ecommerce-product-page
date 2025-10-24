export function setProductDetails(product) {
    const [brand, productName, description, finalPrice, discount, originalPrice, productID] =
        [
            "brand", 
            "name", 
            "description", 
            "final-price", 
            "discount", 
            "original-price", 
            "product-id"
        ]
        .map(id => document.getElementById(id));

    const discountedPrice = product.price * (1 - product.discount / 100);

    brand.textContent = product.brand;
    productName.textContent = product.name;
    description.textContent = product.description;
    finalPrice.textContent = `$${discountedPrice.toFixed(2)}`;
    discount.textContent = `${product.discount}%`;
    originalPrice.textContent = `$${product.price.toFixed(2)}`;
    productID.value = product.name;
};