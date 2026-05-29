import { cardProdTemplate } from "./cardAdminTemplate.js";
import { adminTableProductsNormal } from "./tableProduc.js";

export function cardProdAdmin() {

    const container = document.querySelector(".cardProd-admin");

    if (!container) return;

    // Render inicial
    container.innerHTML = cardProdTemplate();

    // Seleccionar card
    const tableProdCard = document.querySelector('[data-step="productsNormal"]');

    // Evento click
    tableProdCard.addEventListener("click", () => {

        adminTableProductsNormal();

    });

}