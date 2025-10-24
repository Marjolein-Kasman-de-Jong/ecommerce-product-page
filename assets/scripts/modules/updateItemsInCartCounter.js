export function updateItemsInCartCounter () {
    const itemsInCartCounter = document.getElementById("items-in-cart");
    const itemsInCartCounterContent = document.getElementById("amount");

    const cartContent = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsInCart = cartContent.reduce((sum, item) => sum + item.amount, 0);

    itemsInCartCounterContent.textContent = itemsInCart;

    itemsInCart <= 0
    ? itemsInCartCounter.classList.add("hidden")
    : itemsInCartCounter.classList.remove("hidden");
};