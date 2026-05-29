import { categories } from "../../models/homeModel.js";

export function initFilterCatalogMenu() {
    const container = document.getElementById("gridCategorias");
    if (!container) return;

    // Renderizar todas las tarjetas
    container.innerHTML = categories.map((category) => `
        <a
            href="/src/pages/collections/collections.html?category=${category.key}"
            data-category-key="${category.key}"
            class="category-card ${category.span} relative overflow-hidden rounded-xl group block cursor-pointer my-3 transition-all duration-300">
            <img
                src="${category.image}"
                alt="${category.name}"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105">
            <div class="absolute inset-0 flex items-center justify-center bg-black/60">
                <p class="relative text-lg md:text-3xl text-stone-200 font-semibold">
                    ${category.name}
                </p>
            </div>
        </a>
    `).join("");

    // Insertar chips de filtro encima del grid
    const section = container.closest("section");
    const chipsEl = document.createElement("div");
    chipsEl.className = "flex flex-wrap gap-2 justify-center mb-4";
    chipsEl.innerHTML = `
        <button data-key="" class="cat-chip active-cat px-4 py-1 rounded-full border border-[#5C7A6B] bg-[#5C7A6B] text-white text-sm transition">
            Todas
        </button>
        ${categories.map(cat => `
            <button data-key="${cat.key}" class="cat-chip px-4 py-1 rounded-full border border-gray-300 text-sm hover:border-[#5C7A6B] hover:text-[#5C7A6B] transition">
                ${cat.name}
            </button>
        `).join("")}
    `;
    section.insertBefore(chipsEl, container);

    // Lógica de filtrado: mostrar/ocultar tarjetas
    chipsEl.querySelectorAll(".cat-chip").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            // Actualizar chip activo
            chipsEl.querySelectorAll(".cat-chip").forEach(b => {
                b.classList.remove("active-cat", "bg-[#5C7A6B]", "text-white", "border-[#5C7A6B]");
                b.classList.add("border-gray-300");
            });
            btn.classList.add("active-cat", "bg-[#5C7A6B]", "text-white", "border-[#5C7A6B]");
            btn.classList.remove("border-gray-300");

            const key = btn.dataset.key;

            // Mostrar/ocultar tarjetas
            container.querySelectorAll(".category-card").forEach(card => {
                const match = !key || card.dataset.categoryKey === key;
                card.style.display = match ? "" : "none";
            });
        });
    });
}