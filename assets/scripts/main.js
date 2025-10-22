import "./modules/toggleMenu.js";
import "./modules/renderProduct.js";
import "./modules/updateCounter.js";

import { addItemToLocalStorage } from "./modules/addItemToLocalStorage.js";
import { updateItemsInCartCounter } from "./modules/updateItemsInCartCounter.js";
import { openCartPanel } from "./modules/openCartPanel.js";
import { closeCartPanel } from "./modules/closeCartPanel.js";
import { setNavLinkActiveState } from "./modules/setNavLinkActiveState.js";

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.getElementById("add-to-cart-button");
    const cartButton = document.getElementById("cart");
    const cartPanel = document.getElementById("shopping-cart-panel");
    const navLinks = document.querySelectorAll(".navlink");

    updateItemsInCartCounter();

    addToCartButton.addEventListener("click", (e) => {
        addItemToLocalStorage(e);
        updateItemsInCartCounter();
    });

    cartButton.addEventListener("click", () => {
        openCartPanel(cartPanel);
    });

    navLinks.forEach(navLink => {
        setNavLinkActiveState(navLinks, navLink);
    });

    document.addEventListener("click", (e) => {
        closeCartPanel(e, cartButton, cartPanel);
    });
});