import { renderCart } from "./renderCart.js";

export function openCartPanel(cartPanel, avatarWrapper) {
    if (!cartPanel || !avatarWrapper) return;

    cartPanel.classList.toggle("active");
    avatarWrapper.classList.toggle("active");

    const cartContent = JSON.parse(localStorage.getItem("cart")) || [];

    renderCart(cartContent, cartPanel);
};