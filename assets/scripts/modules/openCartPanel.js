import { renderCart } from "./renderCart.js";

export function openCartPanel(cartPanel) {
    if (!cartPanel) return;

    cartPanel.classList.toggle("active");

    const cartContent = JSON.parse(localStorage.getItem("cart")) || [];

    renderCart(cartContent, cartPanel);
};