import { categories } from "../../models/homeModel.js";


export function initFilterCatalogMenu() {

    const container = document.getElementById("gridCategorias");

    if (!container) {
        return;
    }

    container.innerHTML = categories.map((category) => `
        <a
            href="./colecciones.html?category=${category.key}"
            class="${category.span} relative overflow-hidden rounded-xl group block cursor-pointer my-3">
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
}
