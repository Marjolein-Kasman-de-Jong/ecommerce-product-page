document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cart");
    const cartModal = document.getElementById("shopping-cart-modal");

    if (!cartButton || !cartModal) return;

    cartButton.addEventListener("click", () => {
        cartModal.classList.toggle("active");

        if (cartModal.classList.contains("active")) {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const amountOfItems = cart.reduce((sum, item) => sum + Number(item.amount), 0);
            
            amountOfItems <= 0 ? cartModal.classList.add("empty") : cartModal.classList.remove("empty")
        };
    });

    document.addEventListener("click", (e) => {
        if (cartModal.classList.contains("active")) {
            if (
                !cartModal.contains(e.target) &&
                !cartButton.contains(e.target)
            ) {
                cartModal.classList.remove("active");
            }
        }
    });
});