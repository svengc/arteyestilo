import { BDProducts } from "../../../../models/products.js";
import { tableProductTemplate } from "./tableProducTemplate.js";

export function adminTableProductsNormal() {

    const container = document.querySelector(".cardProd-admin");

    if (!container) return;

    container.innerHTML = tableProductTemplate(BDProducts);

}