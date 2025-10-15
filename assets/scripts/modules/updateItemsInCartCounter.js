export function updateItemsInCartCounter () {
    const counter = document.getElementById("items-in-cart");
    const counterContent = document.getElementById("amount");
    const cartContent = JSON.parse(localStorage.getItem("cart")) || [];
    const itemsInCart = cartContent.reduce((sum, item) => sum + item.amount, 0);

    counterContent.textContent = itemsInCart;

    if (itemsInCart <= 0) {
        counter.classList.add("hidden");
    } else {
        counter.classList.remove("hidden");
    }
}

updateItemsInCartCounter();