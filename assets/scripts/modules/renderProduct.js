import { getProductData } from "./getProductData.js";
import { initializeSwipers } from "./initializeSwiper.js";
import { setProductDetails } from "./setProductDetails.js";

const id = Number(product.dataset.id);

getProductData(id).then(product => {
    initializeSwipers(product);
    setProductDetails(product);
});