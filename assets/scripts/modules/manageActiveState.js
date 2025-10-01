document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navlink");

    if (!navLinks) return;

    navLinks.forEach(navLink => {
        navLink.addEventListener("click", () => {
            navLinks.forEach(link => link.closest("li").classList.remove("active"));
            navLink.closest("li").classList.add("active");
        });
    });
});