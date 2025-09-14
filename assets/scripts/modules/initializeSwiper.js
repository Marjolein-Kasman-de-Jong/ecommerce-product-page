const [container, mainWrapper, thumbsWrapper] =
    [".swiper-container", ".mySwiper2 .swiper-wrapper", ".mySwiper .swiper-wrapper"]
        .map(id => document.querySelector(id));

function setSwiperContent(product) {
    const imgs = Array.isArray(product.images) ? product.images : [];

    if (imgs.length === 0) {
        container.hidden = true;
        return;
    }

    container.hidden = false;

    mainWrapper.innerHTML = "";
    thumbsWrapper.innerHTML = "";

    for (const img of imgs) {
        const mainSlide = document.createElement("div");
        mainSlide.className = "swiper-slide";
        const mainImg = document.createElement("img");
        mainImg.src = img.src;
        mainImg.alt = img.alt || product.name || "";
        mainSlide.appendChild(mainImg);
        mainWrapper.appendChild(mainSlide);

        const thumbSlide = document.createElement("div");
        thumbSlide.className = "swiper-slide";
        const thumbImg = document.createElement("img");
        thumbImg.src = img.thumb || img.src;
        thumbImg.alt = img.alt || product.name || "";
        thumbSlide.appendChild(thumbImg);
        thumbsWrapper.appendChild(thumbSlide);
    }
};

export function initializeSwipers(product) {
    setSwiperContent(product);

    const thumbs = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
    });

    const main = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: { swiper: thumbs },
    });

    return { thumbs, main };
}