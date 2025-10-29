import { addItemToLocalStorage } from "./modules/addItemToLocalStorage.js";
import { updateItemsInCartCounter } from "./modules/updateItemsInCartCounter.js";
import { openCartPanel } from "./modules/openCartPanel.js";
import { closeCartPanel } from "./modules/closeCartPanel.js";
import { setNavLinkActiveState } from "./modules/setNavLinkActiveState.js";
import { updateCounter } from "./modules/updateCounter.js";
import { renderProduct } from "./modules/renderProduct.js";
import { closeLightbox } from "./modules/closeLightbox.js";
import { openMenu } from "./modules/openMenu.js";
import { closeMenu } from "./modules/closeMenu.js";

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.getElementById("add-to-cart-button");
    const cartButton = document.getElementById("cart");
    const cartPanel = document.getElementById("shopping-cart-panel");
    const navbar = document.getElementById("navbar");
    const openMenuButton = document.getElementById("menu-toggle");
    const closeMenuButton = document.getElementById("close-icon");
    const navLinks = document.querySelectorAll(".navlink");
    const counter = document.getElementById("quantity");
    const increment = document.getElementById("increment");
    const decrement = document.getElementById("decrement");
    const closeLightboxButton = document.getElementById("close-modal");
    const avatarWrapper = document.getElementById("avatar-wrapper");

    const productId = Number(document.getElementById("product").dataset.id);

    renderProduct(productId);
    updateItemsInCartCounter();

    addToCartButton.addEventListener("click", (e) => {
        addItemToLocalStorage(e);
        updateItemsInCartCounter();
    });

    cartButton.addEventListener("click", () => {
        openCartPanel(cartPanel, avatarWrapper);
    });

    navLinks.forEach(navLink => {
        setNavLinkActiveState(navLinks, navLink);

        navLink.addEventListener("click", (e) => {
            closeMenu(e, navbar, openMenuButton);
        });
    });

    increment.addEventListener("click", (e) => {
        updateCounter(e, counter, 1);
    });

    decrement.addEventListener("click", (e) => {
        updateCounter(e, counter, -1);
    });

    closeLightboxButton.addEventListener("click", () => {
        closeLightbox();
    });

    openMenuButton.addEventListener("click", () => openMenu(navbar));

    closeMenuButton.addEventListener("click", (e) => {
        closeMenu(e, navbar, openMenuButton)
    });
    
    document.addEventListener("click", (e) => {
        closeCartPanel(e, cartButton, cartPanel, avatarWrapper);
        closeMenu(e, navbar, openMenuButton);
    });
});