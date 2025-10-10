import { getProductData } from "./getProductData.js";
import { removeItemFromLocalStorage } from "./manageLocalStorage.js";

document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cart");
    const cartModal = document.getElementById("shopping-cart-modal");

    if (!cartButton || !cartModal) return;

    function removeItemfromCart(id) {
        const currentItems = document.querySelectorAll(".item-wrapper");
        const foundItem = Array.from(currentItems).find(
            item => item.dataset.id === String(id)
        );

        if (foundItem) foundItem.remove();
    }

    cartButton.addEventListener("click", () => {
        cartModal.classList.toggle("active");
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cartModal.classList.contains("active")) {
            const amountOfItems = cart.reduce((sum, item) => sum + Number(item.amount), 0);
            amountOfItems <= 0 ? cartModal.classList.add("empty") : cartModal.classList.remove("empty")
        };

        if (cartModal.classList.contains("active") && !cartModal.classList.contains("empty")) {
            const productList = document.getElementById("product-list");
            productList.replaceChildren();

            if (!productList) return;

            cart.forEach((item) => {
                getProductData(item.id).then(data => {
                    const productData = data;

                    if (
                        !productData ||
                        !productData.images ||
                        !productData.name ||
                        !productData ||
                        !productData.price ||
                        !productData.discount ||
                        !item.amount
                    ) return;

                    const discountedPrice = productData.price * (1 - productData.discount / 100);

                    function createNode(tag, props, text) {
                        const node = document.createElement(tag);
                        Object.assign(node, props);
                        if (text) node.textContent = text;
                        return node;
                    }

                    const newNode = createNode(
                        "li",
                        {
                            className: "item-wrapper",
                        }
                    );

                    newNode.dataset.id = item.id;

                    const imageNode = createNode(
                        "img",
                        {
                            src: productData.images[0].thumb,
                            alt: productData.name
                        }
                    );

                    const wrapperNode = createNode(
                        "div",
                        { className: "wrapper" }
                    );

                    const titleNode = createNode(
                        "h3",
                        { className: "heading-3" },
                        productData.name
                    );

                    const priceNode = createNode(
                        "div",
                        { className: "price" }
                    );

                    const singlePriceNode = createNode(
                        "p",
                        { className: "single-price" },
                        `$${discountedPrice.toFixed(2)} x ${item.amount}`
                    );

                    const totalPriceNode = createNode(
                        "p",
                        { className: "total-price" },
                        `$${(discountedPrice * item.amount).toFixed(2)}`
                    );

                    const trashNode = createNode(
                        "button",
                        {
                            className: "trash-button",
                            type: "button"
                        }
                    );

                    trashNode.addEventListener("click", (e) => {
                        e.stopPropagation();

                        const itemToRemove = Number(trashNode.closest(".item-wrapper").dataset.id);

                        removeItemfromCart(itemToRemove);
                        removeItemFromLocalStorage(itemToRemove);
                    });

                    priceNode.append(singlePriceNode, totalPriceNode);
                    wrapperNode.append(titleNode, priceNode);
                    newNode.append(imageNode, wrapperNode, trashNode);

                    productList.appendChild(newNode);
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