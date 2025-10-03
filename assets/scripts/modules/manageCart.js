import { getProductData } from "./getProductData.js";

document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cart");
    const cartModal = document.getElementById("shopping-cart-modal");

    if (!cartButton || !cartModal) return;

    cartButton.addEventListener("click", () => {
        cartModal.classList.toggle("active");
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cartModal.classList.contains("active")) {
            // const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const amountOfItems = cart.reduce((sum, item) => sum + Number(item.amount), 0);
            
            amountOfItems <= 0 ? cartModal.classList.add("empty") : cartModal.classList.remove("empty")
        };

        if (cartModal.classList.contains("active") && !cartModal.classList.contains("empty")) {
            const productList = document.getElementById("product-list");
            
            cart.forEach(item => {
                getProductData(item.id).then(data => {
                    const productData = data;

                    const newNode = document.createElement("li");
                    Object.assign(newNode, {
                        className: "item-wrapper"
                    });

                    const imageNode = document.createElement("img");
                    Object.assign(imageNode, {
                        src: productData.images[0].thumb,
                        alt: productData.name
                    });
                    newNode.appendChild(imageNode);

                    // Chekcs inbouwen voor als bepaalde data niet bestaat


                    productList.appendChild(newNode);
                    console.log(productData)
                });

                
            });
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