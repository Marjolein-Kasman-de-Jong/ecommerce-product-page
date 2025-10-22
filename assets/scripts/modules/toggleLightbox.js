import { initializeSwipers } from "./initializeSwiper.js";
import { getProductData } from "./getProductData.js";

export function openLightBox(e) {
    const index = Number(e.target.dataset.index);
    document.getElementById("lightbox").classList.remove("hidden");

    const id = Number(document.getElementById("product").dataset.id);
    getProductData(id).then(product => {
        const { main } = initializeSwipers("modal", product);

        setTimeout(() => {
            main.slideToLoop(index, 0);
        }, 50);
    });
};

const closeButton = document.getElementById("close-modal");

closeButton.addEventListener("click", () => {
    document.getElementById("lightbox").classList.add("hidden");

    // getProductData(id).then(product => {
    //     initializeSwipers("gallery", product);
    //     setProductDetails(product);
    // });
});