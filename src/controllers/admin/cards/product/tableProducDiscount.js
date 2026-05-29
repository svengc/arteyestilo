import { BDProducts } from "../../../../models/products.js";
import { tableProductTemplate } from "./tableProducTemplate.js";

export function adminTableProductsDiscount() {

    const container = document.querySelector(".cardProd-admin");

    if (!container) return;

    // Filtrar CON descuento
    const discountProducts = BDProducts.filter(product => product.discount);

    container.innerHTML = tableProductTemplate(discountProducts);

}