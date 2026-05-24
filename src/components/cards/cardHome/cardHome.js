import { getPriceProducts } from "../../../controllers/catalog/priceProdudcts.js";

import { cardHomeTemplate, cardHomeTemplateDiscount } from "./cardHomeTemplate.js";

export function initCardHome() {

    const container = document.querySelector(".productsContainer");

    if (!container) return;

    const products = getPriceProducts();

    container.innerHTML = products
        .map(product => cardHomeTemplate(product))
        .join("");
}
export function initCardHomeDiscount() {

    const container = document.querySelector(".productsContainerDiscount");

    if (!container) return;

    const products = getPriceProducts();

    container.innerHTML = products
        .map(product => cardHomeTemplateDiscount(product))
        .join("");
}