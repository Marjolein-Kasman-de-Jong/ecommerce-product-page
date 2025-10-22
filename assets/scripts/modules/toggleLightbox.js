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

    document.documentElement.classList.add('lightbox-open');    
};

const closeButton = document.getElementById("close-modal");

closeButton.addEventListener("click", () => {
    const activeImg = document.querySelector(
        '#lightbox .swiper-container[data-scope="modal"] .mySwiper2 .swiper-slide-active img'
    );

    const index = Number(activeImg?.dataset.index ?? 0);
    
    document.getElementById("lightbox").classList.add("hidden");

    const id = Number(document.getElementById("product").dataset.id);

    getProductData(id).then(product => {
        const { main } = initializeSwipers("gallery", product);

        setTimeout(() => {
            main.slideToLoop(index, 0);
        }, 50);
    });

    document.documentElement.classList.remove('lightbox-open');
});