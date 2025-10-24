import { getProductData } from "./getProductData.js";
import { initializeSwipers } from "./initializeSwiper.js";
import { setProductDetails } from "./setProductDetails.js";

export async function renderProduct(productId) {
    if (!productId) return;

    const product = await getProductData(productId);
    
    initializeSwipers("gallery", product);
    setProductDetails(product);
};