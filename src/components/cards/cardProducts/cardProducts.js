import { getPriceProducts } from "../../../controllers/catalog/priceProdudcts.js";
import { cardProductTemplate } from "./cardProductsTemplate.js";

export function cardProducts() {
    const container = document.querySelector(".productsCollections");
    if (!container) return;

    const allProducts = getPriceProducts().filter(p => !p.discount);
    const active = { category: null, style: null, material: null, search: "" };

    const categoryLabels = {
        sala:       "Sala & Descanso",
        comedor:    "Comedor & Reunión",
        dormitorio: "Descanso & Intimidad",
        detalles:   "Detalles que Cuentan",
    };

    // Poblar chips dinámicamente en el HTML ya existente
    const categories = [...new Set(allProducts.map(p => p.category))];
    const styles     = [...new Set(allProducts.map(p => p.style).filter(Boolean))];
    const materials  = [...new Set(allProducts.map(p => p.material).filter(Boolean))];

    function buildChips(containerId, type, values, labelFn) {
        const el = document.getElementById(containerId);
        if (!el) return;
        values.forEach(val => {
            const btn = document.createElement("button");
            btn.dataset.filter = type;
            btn.dataset.value  = val;
            btn.className = "filter-chip px-3 py-1 rounded-full border border-gray-300 text-sm hover:border-[#5C7A6B] hover:text-[#5C7A6B] transition";
            btn.textContent = labelFn ? labelFn(val) : val;
            el.appendChild(btn);
        });
    }

    buildChips("filter-category", "category", categories, v => categoryLabels[v] || v);
    buildChips("filter-style",    "style",    styles);
    buildChips("filter-material", "material", materials);

    // Renderizar grid (diseño original)
    function applyFilters() {
        const filtered = allProducts.filter(p => {
            const matchCat    = !active.category || p.category === active.category;
            const matchStyle  = !active.style    || p.style    === active.style;
            const matchMat    = !active.material || p.material === active.material;
            const matchSearch = !active.search
                || p.name.toLowerCase().includes(active.search)
                || (p.summary || "").toLowerCase().includes(active.search);
            return matchCat && matchStyle && matchMat && matchSearch;
        });

        container.innerHTML = filtered.length
            ? filtered.map(p => cardProductTemplate(p)).join("")
            : `<div class="col-span-4 text-center py-16 text-gray-400 text-sm">
                   No se encontraron productos con estos filtros.
               </div>`;

        const countEl = document.getElementById("results-count");
        if (countEl) countEl.textContent = `${filtered.length} producto${filtered.length !== 1 ? "s" : ""}`;

        const hasActive = active.category || active.style || active.material || active.search;
        document.getElementById("clear-filters")?.classList.toggle("hidden", !hasActive);
    }

    // Chips toggle
    document.getElementById("collections-filters")?.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-chip");
        if (!btn) return;

        const type  = btn.dataset.filter;
        const value = btn.dataset.value;

        if (active[type] === value) {
            active[type] = null;
            btn.classList.remove("bg-[#5C7A6B]", "text-white", "border-[#5C7A6B]");
        } else {
            document.querySelectorAll(`[data-filter="${type}"]`).forEach(b =>
                b.classList.remove("bg-[#5C7A6B]", "text-white", "border-[#5C7A6B]")
            );
            active[type] = value;
            btn.classList.add("bg-[#5C7A6B]", "text-white", "border-[#5C7A6B]");
        }
        applyFilters();
    });

    // Búsqueda
    document.getElementById("search-input")?.addEventListener("input", (e) => {
        active.search = e.target.value.toLowerCase().trim();
        applyFilters();
    });

    // Limpiar
    document.getElementById("clear-filters")?.addEventListener("click", () => {
        active.category = null;
        active.style    = null;
        active.material = null;
        active.search   = "";
        document.getElementById("search-input").value = "";
        document.querySelectorAll(".filter-chip").forEach(b =>
            b.classList.remove("bg-[#5C7A6B]", "text-white", "border-[#5C7A6B]")
        );
        applyFilters();
    });

    applyFilters();
}