export function closeCartPanel(e, cartButton, cartPanel, avatarWrapper) {
    if (!cartButton || !cartPanel || !avatarWrapper) return;

    if (cartPanel.classList.contains("active")) {
        if (
            !cartPanel.contains(e.target) &&
            !cartButton.contains(e.target)
        ) {
            cartPanel.classList.remove("active");
            avatarWrapper.classList.remove("active");
        }
    }
};