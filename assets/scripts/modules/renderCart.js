import { getProductData } from "./getProductData.js";
import { removeItemfromCart } from "./removeItemFromCart.js";
import { removeItemFromLocalStorage } from "./removeItemFromLocalStorage.js";

export function renderCart(cartContent, cartPanel) {
    if (cartPanel.classList.contains("active")) {
        const amountOfItems = cartContent.reduce((sum, item) => sum + Number(item.amount), 0);
        amountOfItems <= 0 ? cartPanel.classList.add("empty") : cartPanel.classList.remove("empty")
    };

    if (cartPanel.classList.contains("active") && !cartPanel.classList.contains("empty")) {
        const productList = document.getElementById("product-list");

        if (!productList) return;

        productList.replaceChildren();

        cartContent.forEach((item) => {
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

                    removeItemFromLocalStorage(itemToRemove);
                    removeItemfromCart(itemToRemove, cartPanel);
                });

                priceNode.append(singlePriceNode, totalPriceNode);
                wrapperNode.append(titleNode, priceNode);
                newNode.append(imageNode, wrapperNode, trashNode);

                productList.appendChild(newNode);
            });
        });
    };
};