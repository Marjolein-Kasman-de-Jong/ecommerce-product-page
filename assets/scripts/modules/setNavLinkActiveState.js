export function setNavLinkActiveState(navLinks, navLink) {
    if (!navLinks || !navLink) return;

    navLink.addEventListener("click", () => {
        navLinks.forEach(link => link.closest("li").classList.remove("active"));
        navLink.closest("li").classList.add("active");
    });
};