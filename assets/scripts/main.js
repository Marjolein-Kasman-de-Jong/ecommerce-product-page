import "./modules/toggleMenu.js";
import "./modules/renderProduct.js";
import "./modules/updateCounter.js";

import { addItemToLocalStorage } from "./modules/addItemToLocalStorage.js";
import { updateItemsInCartCounter } from "./modules/updateItemsInCartCounter.js";
import { openCartPanel } from "./modules/openCartPanel.js";
import { closeCartPanel } from "./modules/closeCartPanel.js";
import { setNavLinkActiveState } from "./modules/setNavLinkActiveState.js";
import { updateCounter } from "./modules/updateCounter.js";

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.getElementById("add-to-cart-button");
    const cartButton = document.getElementById("cart");
    const cartPanel = document.getElementById("shopping-cart-panel");
    const navLinks = document.querySelectorAll(".navlink");
    const counter = document.getElementById("quantity");
    const increment = document.getElementById("increment");
    const decrement = document.getElementById("decrement");

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

    increment.addEventListener("click", (e) => {
        updateCounter(e, counter, 1);
    });

    decrement.addEventListener("click", (e) => {
        updateCounter(e, counter, -1);
    });

    document.addEventListener("click", (e) => {
        closeCartPanel(e, cartButton, cartPanel);
    });
});