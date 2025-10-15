export function removeItemFromLocalStorage(itemToRemove) {
    const localStorageContent = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedLocalStorageContent = localStorageContent.filter(item => item.id !== itemToRemove);
    localStorage.setItem("cart", JSON.stringify(updatedLocalStorageContent));
};