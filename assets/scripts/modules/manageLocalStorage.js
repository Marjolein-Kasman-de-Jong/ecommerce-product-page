document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.getElementById("add-to-cart-button");
    
    if (!addToCartButton) return;

    addToCartButton.addEventListener("click", (e) => {
        e.preventDefault();
        
        const productId = Number(document.getElementById("product").dataset.id);
        const amount = Number(document.getElementById("quantity").value);

        if (!productId || !amount) return;

        const localStorageContent = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItem = localStorageContent.find(item => item.id === productId);
        existingItem ? existingItem.amount += amount : localStorageContent.push({ id: productId, amount });
        
        localStorage.setItem("cart", JSON.stringify(localStorageContent));
    });
});

export function removeItemFromLocalStorage(itemToRemove) {
    const localStorageContent = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedLocalStorageContent = localStorageContent.filter(item => item.id !== itemToRemove);
    localStorage.setItem("cart", JSON.stringify(updatedLocalStorageContent));
};