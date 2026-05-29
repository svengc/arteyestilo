import { cardProdTemplate } from "./cardAdminTemplate.js";
import { adminTableProductsNormal } from "./tableProduc.js";
import { adminTableProductsDiscount } from "./tableProducDiscount.js";

export function cardProdAdmin() {

    const container = document.querySelector(".cardProd-admin");

    if (!container) return;

    container.innerHTML = cardProdTemplate();

    // Productos normales
    const normalCard = document.querySelector('[data-step="productsNormal"]');

    normalCard.addEventListener("click", () => {

        adminTableProductsNormal();

    });

    // Productos descuento
    const discountCard = document.querySelector('[data-step="productsDiscount"]');

    discountCard.addEventListener("click", () => {

        adminTableProductsDiscount();

    });

}