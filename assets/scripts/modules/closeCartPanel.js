export function closeCartPanel(e, cartButton, cartPanel) {
    if (!cartButton || !cartPanel) return;

    if (cartPanel.classList.contains("active")) {
        if (
            !cartPanel.contains(e.target) &&
            !cartButton.contains(e.target)
        ) {
            cartPanel.classList.remove("active");
        }
    }
};