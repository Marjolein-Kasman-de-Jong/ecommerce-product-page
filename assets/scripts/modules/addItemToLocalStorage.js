export function addItemToLocalStorage(e) {
    e.preventDefault();

    const productId = Number(document.getElementById("product").dataset.id);
    const amount = Number(document.getElementById("quantity").value);

    if (!productId || !amount) return;

    const localStorageContent = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = localStorageContent.find(item => item.id === productId);
    existingItem ? existingItem.amount += amount : localStorageContent.push({ id: productId, amount });

    localStorage.setItem("cart", JSON.stringify(localStorageContent));
};