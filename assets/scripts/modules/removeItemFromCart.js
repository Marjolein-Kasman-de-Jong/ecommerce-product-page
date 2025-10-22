import { renderCart } from "./renderCart.js";

export function removeItemfromCart(itemId, cartPanel) {
    if (!itemId || !cartPanel) return;

    const itemsInCart = document.querySelectorAll(".item-wrapper");

    const itemToRemove = Array.from(itemsInCart).find(
        item => item.dataset.id === String(itemId)
    );

    if (itemToRemove) itemToRemove.remove();

    const updatedCartContent = JSON.parse(localStorage.getItem("cart")) || [];

    renderCart(updatedCartContent, cartPanel);
};