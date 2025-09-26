document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const openButton = document.getElementById("menu-toggle");
    const closeButton = document.getElementById("close-icon");
    const navLinks = document.querySelectorAll(".navlink");

    if (!navbar || !openButton || !closeButton) return;

    openButton.addEventListener("click", () => navbar.classList.add("open"));
    closeButton.addEventListener("click", () => navbar.classList.remove("open"));

    navLinks.forEach(navLink => {
        navLink.addEventListener("click", () => {
            navbar.classList.remove("open");
        });
    });

    document.addEventListener("click", (event) => {
        if (navbar.classList.contains("open")) {
            if (
                !navbar.contains(event.target) &&
                !openButton.contains(event.target)
            ) {
                navbar.classList.remove("open");
            }
        }
    });
});