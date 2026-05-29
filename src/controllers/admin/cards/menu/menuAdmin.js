import { menuProdTemplate } from "./menuAdminTemplate.js";
import { cardProdTemplate } from "../product/cardAdminTemplate.js";

export function menuAdmin() {

    const container = document.querySelector(".menu-admin");

    if (!container) return;

    container.innerHTML = menuProdTemplate();

    const productCard = document.querySelector('[data-step="products"]');

    productCard.addEventListener("click", () => {

        container.innerHTML = cardProdTemplate();

    });

}