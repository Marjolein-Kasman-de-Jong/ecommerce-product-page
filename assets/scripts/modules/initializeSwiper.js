import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import { openLightBox } from './toggleLightbox.js';

function setSwiperContent(scope, product) {
    const [container, mainWrapper, thumbsWrapper] =
        [
            `.swiper-container[data-scope="${scope}"]`,
            `.swiper-container[data-scope="${scope}"] .mySwiper2 .swiper-wrapper`,
            `.swiper-container[data-scope="${scope}"] .mySwiper .swiper-wrapper`
        ]
            .map(id => document.querySelector(id));

    const imgs = Array.isArray(product.images) ? product.images : [];

    if (imgs.length === 0) {
        container.hidden = true;
        return;
    }

    container.hidden = false;

    mainWrapper.innerHTML = "";
    thumbsWrapper.innerHTML = "";

    let index = 0;

    for (const img of imgs) {
        const mainSlide = document.createElement("div");
        mainSlide.className = "swiper-slide";
        const mainImg = document.createElement("img");
        mainImg.src = img.src;
        mainImg.alt = img.alt || product.name || "";
        mainImg.dataset.index = index;
        mainImg.addEventListener("click", openLightBox);
        mainSlide.appendChild(mainImg);
        mainWrapper.appendChild(mainSlide);

        const thumbSlide = document.createElement("div");
        thumbSlide.className = "swiper-slide";
        const thumbImg = document.createElement("img");
        thumbImg.src = img.thumb || img.src;
        thumbImg.alt = img.alt || product.name || "";
        thumbSlide.appendChild(thumbImg);
        thumbsWrapper.appendChild(thumbSlide);

        index++;
    }
};

export function initializeSwipers(scope, product) {
    const existingSwipers = document.querySelectorAll(
        `.swiper-container[data-scope="${scope}"] .swiper`
    );

    existingSwipers.forEach(container => {
        if (container.swiper) {
            container.swiper.destroy(true, true);
        }
    });
    
    setSwiperContent(scope, product);

    const thumbs = new Swiper(`.swiper-container[data-scope="${scope}"] .mySwiper`, {
        loop: true,
        spaceBetween: 32,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
    });

    const main = new Swiper(`.swiper-container[data-scope="${scope}"] .mySwiper2`, {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: { swiper: thumbs },
    });

    return { thumbs, main };
};