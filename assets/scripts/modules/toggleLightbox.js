export function openLightBox() {
    document.getElementById("lightbox").classList.remove("hidden");
};

const closeButton = document.getElementById("close-modal");

closeButton.addEventListener("click", () => {
    document.getElementById("lightbox").classList.add("hidden");
});