export async function getProductData(id) {
    const response = await fetch("./data/products.json");

    if (!response.ok) {
        throw new Error(`HTTP error! ${response.status}`);
    }

    const data = await response.json();

    const product = data.find(item => item.id === id);

    if (!product) {
        throw new Error(`Geen product gevonden met id ${id}`);
    }

    return product;
};