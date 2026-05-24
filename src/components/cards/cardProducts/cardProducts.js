import { getPriceProducts } from "../../../controllers/catalog/priceProdudcts.js";
import { cardProductTemplate } from "./cardProductsTemplate.js";

export function cardProducts() {

    const container = document.querySelector(".productsCollections");

    if (!container) return;

    const products = getPriceProducts();

    container.innerHTML = products
        .map(product => cardProductTemplate(product))
        .join("");
}
