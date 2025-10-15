import { renderCart } from "./renderCart.js";

document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cart");
    const cartModal = document.getElementById("shopping-cart-modal");

    if (!cartButton || !cartModal) return;

    cartButton.addEventListener("click", () => {
        cartModal.classList.toggle("active");
        
        const cartContent = JSON.parse(localStorage.getItem("cart")) || [];

        renderCart(cartContent, cartModal);
    });

    document.addEventListener("click", (e) => {
        if (cartModal.classList.contains("active")) {
            if (
                !cartModal.contains(e.target) &&
                !cartButton.contains(e.target)
            ) {
                cartModal.classList.remove("active");
            }
        }
    });
});