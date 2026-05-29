import { menuProdTemplate } from "./menuAdminTemplate.js";
import { cardProdAdmin } from "../product/cardAdmin.js";

export function menuAdmin() {

    const container = document.querySelector(".menu-admin");

    if (!container) return;

    container.innerHTML = menuProdTemplate();

    const productCard = document.querySelector('[data-step="products"]');

    productCard.addEventListener("click", () => {

        // Renderiza el siguiente step
        container.innerHTML = `
            <section class="cardProd-admin"></section>
        `;

        // Inicializa el panel productos
        cardProdAdmin();

    });

}