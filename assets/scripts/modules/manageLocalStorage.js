document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.getElementById("add-to-cart-button");

    if (!addToCartButton) return;

    addToCartButton.addEventListener("click", (e) => {
        e.preventDefault();
        
        const productId = Number(document.getElementById("product").dataset.id);
        const amount = Number(document.getElementById("quantity").value);

        if (!productId || !amount) return;

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItem = cart.find(item => item.id === productId);
        existingItem ? existingItem.amount += amount : cart.push({ id: productId, amount });
        
        localStorage.setItem("cart", JSON.stringify(cart));
    });
});