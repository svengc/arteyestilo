import { BDProducts } from "../../../../models/products.js";
import { tableProductTemplate } from "./tableProducTemplate.js";

export function adminTableProductsDiscount() {

    const container = document.querySelector(".cardProd-admin");

    if (!container) return;

    // Filtrar CON descuento
    const discountProducts = BDProducts.filter(product => product.discount);

    container.innerHTML = tableProductTemplate(discountProducts);

    activateEditMode();

    function activateEditMode() {

        const editButtons = document.querySelectorAll(".edit-btn");
    
        editButtons.forEach(button => {
    
            button.addEventListener("click", () => {
    
                const row = button.closest("[data-id]");
    
                const spans = row.querySelectorAll(".text-value");
                const inputs = row.querySelectorAll(".edit-input");
    
                const saveBtn = row.querySelector(".save-btn");
    
                // ocultar textos
                spans.forEach(span => {
                    span.classList.add("hidden");
                });
    
                // mostrar inputs
                inputs.forEach(input => {
                    input.classList.remove("hidden");
                });
    
                // ocultar editar
                button.classList.add("hidden");
    
                // mostrar guardar
                saveBtn.classList.remove("hidden");
            });
        });
    
        const saveButtons = document.querySelectorAll(".save-btn");
    
        saveButtons.forEach(button => {
    
            button.addEventListener("click", () => {
    
                const row = button.closest("[data-id]");
    
                const spans = row.querySelectorAll(".text-value");
                const inputs = row.querySelectorAll(".edit-input");
    
                const editBtn = row.querySelector(".edit-btn");
    
                // actualizar textos
                spans.forEach((span, index) => {
                    span.textContent = inputs[index].value;
                    span.classList.remove("hidden");
                });
    
                // ocultar inputs
                inputs.forEach(input => {
                    input.classList.add("hidden");
                });
    
                // mostrar editar
                editBtn.classList.remove("hidden");
    
                // ocultar guardar
                button.classList.add("hidden");
            });
        });
    }
}