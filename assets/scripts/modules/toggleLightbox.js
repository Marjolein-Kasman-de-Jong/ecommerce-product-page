import { initializeSwipers } from "./initializeSwiper.js";
import { getProductData } from "./getProductData.js";

export function openLightBox() {
    document.getElementById("lightbox").classList.remove("hidden");

    const id = Number(document.getElementById("product").dataset.id);
    getProductData(id).then(product => {
        initializeSwipers("modal", product);
    });
};

const closeButton = document.getElementById("close-modal");

closeButton.addEventListener("click", () => {
    document.getElementById("lightbox").classList.add("hidden");
});