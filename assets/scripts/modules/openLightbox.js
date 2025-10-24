import { getProductData } from "./getProductData.js";
import { initializeSwipers } from "./initializeSwiper.js";

export function openLightBox(e) {
    const index = Number(e.target.dataset.index);
    document.getElementById("lightbox").classList.remove("hidden");

    const productId = Number(document.getElementById("product").dataset.id);
    
    getProductData(productId).then(product => {
        const { main } = initializeSwipers("lightbox", product);

        setTimeout(() => {
            main.slideToLoop(index, 0);
        }, 50);
    });

    document.documentElement.classList.add('lightbox-open');    
};