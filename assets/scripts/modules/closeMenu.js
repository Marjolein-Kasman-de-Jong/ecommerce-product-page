export function closeMenu(e, navbar, openMenuButton) {
    if (!navbar || !openMenuButton) return;

    if (
        navbar.classList.contains("open") &&
        (e.target.classList.contains("navlink") || e.target.classList.contains("close-icon")) ||
        (!navbar.contains(e.target) && !openMenuButton.contains(e.target))
    ) {
        navbar.classList.remove("open");
    }
};