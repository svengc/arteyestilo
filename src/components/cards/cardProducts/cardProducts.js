import { getPriceProducts } from "../../../controllers/catalog/priceProdudcts.js";
import { cardProductTemplate } from "./cardProductsTemplate.js";

export function cardProducts() {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    console.log("🧩 ID de la URL:", id);

    const container = document.querySelector(".productsCollections");

    if (!container) return;

    const products = getPriceProducts();

    const product = products.find(p => p.id === id);

    container.innerHTML = products
        .map(product => cardProductTemplate(product))
        .join("");
}
