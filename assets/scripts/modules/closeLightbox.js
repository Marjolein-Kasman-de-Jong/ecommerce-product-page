import { getProductData } from "./getProductData.js";
import { initializeSwipers } from "./initializeSwiper.js";

export function closeLightbox() {
    const activeImg = document.querySelector(
        '#lightbox .swiper-container[data-scope="lightbox"] .mySwiper2 .swiper-slide-active img'
    );

    const index = Number(activeImg?.dataset.index ?? 0);

    document.getElementById("lightbox").classList.add("hidden");

    const productId = Number(document.getElementById("product").dataset.id);

    getProductData(productId).then(product => {
        const { main } = initializeSwipers("gallery", product);

        setTimeout(() => {
            main.slideToLoop(index, 0);
        }, 50);
    });

    document.documentElement.classList.remove('lightbox-open');
};