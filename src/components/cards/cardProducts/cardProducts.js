import { getPriceProducts } from "../../../controllers/catalog/priceProdudcts.js";
import { cardProductTemplate } from "./cardProductsTemplate.js";

export function cardProduct() {

    const container = document.querySelector(".cardProduct");

    if (!container) return;

    const products = getPriceProducts();

    container.innerHTML = products
        .map(product => cardProductTemplate(product))
        .join("");
}