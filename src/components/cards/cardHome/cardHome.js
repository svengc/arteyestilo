import { getPriceProducts } from "../../../controllers/catalog/priceProdudcts.js";
import { cardHomeTemplate, cardHomeTemplateDiscount } from "./cardHomeTemplate.js";

export function initCardHome() {
    const container = document.querySelector(".productsContainer");
    if (!container) return;

    const allProducts = getPriceProducts().filter(p => !p.discount);
    const categories  = [...new Set(allProducts.map(p => p.category))];

    const categoryLabels = {
        sala:       "Sala & Descanso",
        comedor:    "Comedor & Reunión",
        dormitorio: "Descanso & Intimidad",
        detalles:   "Detalles que Cuentan",
    };

    // Insertar chips encima del carrusel
    const chipsEl = document.createElement("div");
    chipsEl.className = "flex flex-wrap gap-2 justify-center mb-4";
    chipsEl.innerHTML = `
        <button data-cat="" class="home-chip active-chip px-4 py-1 rounded-full border border-[#5C7A6B] bg-[#5C7A6B] text-white text-sm transition">
            Todos
        </button>
        ${categories.map(cat => `
            <button data-cat="${cat}" class="home-chip px-4 py-1 rounded-full border border-gray-300 text-sm hover:border-[#5C7A6B] hover:text-[#5C7A6B] transition">
                ${categoryLabels[cat] || cat}
            </button>
        `).join("")}
    `;
    container.parentElement.insertBefore(chipsEl, container);

    function renderNormal(filterCat) {
        const filtered = filterCat
            ? allProducts.filter(p => p.category === filterCat)
            : allProducts;
        container.innerHTML = filtered.length
            ? filtered.map(p => cardHomeTemplate(p)).join("")
            : `<p class="text-gray-400 text-sm text-center w-full py-8">Sin productos en esta categoría.</p>`;
    }

    chipsEl.querySelectorAll(".home-chip").forEach(btn => {
        btn.addEventListener("click", () => {
            chipsEl.querySelectorAll(".home-chip").forEach(b => {
                b.classList.remove("active-chip", "bg-[#5C7A6B]", "text-white", "border-[#5C7A6B]");
                b.classList.add("border-gray-300");
            });
            btn.classList.add("active-chip", "bg-[#5C7A6B]", "text-white", "border-[#5C7A6B]");
            btn.classList.remove("border-gray-300");
            renderNormal(btn.dataset.cat);
        });
    });

    renderNormal(null);
}

export function initCardHomeDiscount() {
    const container = document.querySelector(".productsContainerDiscount");
    if (!container) return;

    const allProducts = getPriceProducts().filter(p => p.discount);
    const categories  = [...new Set(allProducts.map(p => p.category))];

    const categoryLabels = {
        sala:       "Sala & Descanso",
        comedor:    "Comedor & Reunión",
        dormitorio: "Descanso & Intimidad",
        detalles:   "Detalles que Cuentan",
    };

    const chipsEl = document.createElement("div");
    chipsEl.className = "flex flex-wrap gap-2 justify-center mb-4";
    chipsEl.innerHTML = `
        <button data-cat="" class="home-chip-disc active-chip-disc px-4 py-1 rounded-full border border-[#5C7A6B] bg-[#5C7A6B] text-white text-sm transition">
            Todos
        </button>
        ${categories.map(cat => `
            <button data-cat="${cat}" class="home-chip-disc px-4 py-1 rounded-full border border-gray-300 text-sm hover:border-[#5C7A6B] hover:text-[#5C7A6B] transition">
                ${categoryLabels[cat] || cat}
            </button>
        `).join("")}
    `;
    container.parentElement.insertBefore(chipsEl, container);

    function renderDiscount(filterCat) {
        const filtered = filterCat
            ? allProducts.filter(p => p.category === filterCat)
            : allProducts;
        container.innerHTML = filtered.length
            ? filtered.map(p => cardHomeTemplateDiscount(p)).join("")
            : `<p class="text-gray-400 text-sm text-center w-full py-8">Sin productos en esta categoría.</p>`;
    }

    chipsEl.querySelectorAll(".home-chip-disc").forEach(btn => {
        btn.addEventListener("click", () => {
            chipsEl.querySelectorAll(".home-chip-disc").forEach(b => {
                b.classList.remove("active-chip-disc", "bg-[#5C7A6B]", "text-white", "border-[#5C7A6B]");
                b.classList.add("border-gray-300");
            });
            btn.classList.add("active-chip-disc", "bg-[#5C7A6B]", "text-white", "border-[#5C7A6B]");
            btn.classList.remove("border-gray-300");
            renderDiscount(btn.dataset.cat);
        });
    });

    renderDiscount(null);
}