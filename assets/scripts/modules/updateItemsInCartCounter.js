export function updateItemsInCartCounter () {
    const itemsInCartCounter = document.getElementById("items-in-cart");
    const itemsInCartCounterContent = document.getElementById("amount");
    const cartContent = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsInCart = cartContent.reduce((sum, item) => sum + item.amount, 0);

    itemsInCartCounterContent.textContent = itemsInCart;

    if (itemsInCart <= 0) {
        itemsInCartCounter.classList.add("hidden");
    } else {
        itemsInCartCounter.classList.remove("hidden");
    }
};