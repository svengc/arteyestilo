/**
 * Todas las imágenes disponibles en el proyecto.
 * Rutas absolutas desde la raíz del servidor.
 */
const ALL_PROJECT_IMAGES = [
    "/src/assets/img/catalogo/card-venta1.jpg",
    "/src/assets/img/catalogo/card-venta2.jpg",
    "/src/assets/img/catalogo/card-venta3.jpg",
    "/src/assets/img/catalogo/card-venta4.jpg",
    "/src/assets/img/catalogo/comedor2-1.jpg",
    "/src/assets/img/catalogo/comedor2-2.jpg",
    "/src/assets/img/catalogo/comedor2-3.jpg",
    "/src/assets/img/catalogo/comedor2-4.jpg",
    "/src/assets/img/catalogo/mesa-1.jpg",
    "/src/assets/img/catalogo/mesa-2.jpg",
    "/src/assets/img/catalogo/mesa-3.jpg",
    "/src/assets/img/catalogo/mesa-4.jpg",
    "/src/assets/img/catalogo/mueble-1.jpg",
    "/src/assets/img/catalogo/mueble-2.jpg",
    "/src/assets/img/catalogo/mueble-3.jpg",
    "/src/assets/img/catalogo/mueble-4.jpg",
    "/src/assets/img/catalogo/silla-tapizada-1.jpg",
    "/src/assets/img/catalogo/silla-tapizada-2.jpg",
    "/src/assets/img/catalogo/silla-tapizada-3.jpg",
    "/src/assets/img/catalogo/silla-tapizada-4.jpg",
    "/src/assets/img/bnFooter_infoCatalogo/banner-silla-tapizada.jpg",
    "/src/assets/img/bnFooter_infoCatalogo/banner-silla.jpg",
    "/src/assets/img/bnFooter_infoCatalogo/banner-venta.jpg",
    "/src/assets/img/bnFooter_infoCatalogo/muebles.jpg",
    "/src/assets/img/banner/banner-contact-home.jpg",
    "/src/assets/img/banner/banner-footer-contacto.jpg",
    "/src/assets/img/banner/banner.jpg",
    "/src/assets/img/other/banner-comedor.jpg",
    "/src/assets/img/other/card_calidad.jpg",
    "/src/assets/img/other/card_creatividad.jpg",
    "/src/assets/img/other/card_innovacion.jpg",
    "/src/assets/img/other/comedores.jpg",
    "/src/assets/img/other/mesa.jpg",
    "/src/assets/img/other/muebles.jpg",
    "/src/assets/img/other/silla.jpg",
];

/**
 * Normaliza rutas de imagen para que funcionen desde cualquier HTML del proyecto.
 * Las rutas en products.js usan "../../assets/..." relativo a src/models/
 * El browser las resuelve relativo al HTML actual, por eso hay que normalizarlas.
 */
function normalizeImgPath(path) {
    if (!path) return "https://placehold.co/64x64";
    // Si ya es absoluta o URL externa, dejarla tal cual
    if (path.startsWith("http") || path.startsWith("/")) return path;
    // Extraer solo el nombre del archivo y construir ruta absoluta desde la raíz
    const match = path.match(/assets\/img\/(.+)$/);
    if (match) return `/src/assets/img/${match[1]}`;
    return path;
}

export const tableProductTemplate = (products, showDiscount = false) => `

<section class="w-full max-h-screen p-6 bg-gray-100">

    <div class="flex items-center justify-between mb-6">
        <a href="/src/controllers/admin/adminPage/admin.html" class="underline text-sm text-gray-600">
            ← Volver
        </a>
        <button
            id="add-product-btn"
            class="bg-[#5C7A6B] text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#4a6558] transition"
        >
            + Agregar producto
        </button>
        <button
            id="reset-products-btn"
            class="bg-yellow-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-yellow-600 transition"
        >
            🔄 Restaurar originales
        </button>
    </div>

    <div class="mx-auto bg-white rounded-3xl shadow-xl overflow-hidden overflow-x-auto">

        <!-- HEADER -->
        <div class="${showDiscount ? 'grid-cols-10' : 'grid-cols-9'} grid gap-4 bg-[#5C7A6B] text-white p-5 font-semibold text-sm uppercase tracking-wide min-w-[900px]">
            <div>ID</div>
            <div>Imagen</div>
            <div>Nombre</div>
            <div>Precio</div>
            ${showDiscount ? '<div>Compare</div>' : ''}
            <div>Categoría</div>
            <div>Material</div>
            <div>Estilo</div>
            <div>Stock</div>
            <div>Acciones</div>
        </div>

        ${products.length === 0 ? `
            <div class="p-10 text-center text-gray-400 text-sm">No hay productos en esta lista.</div>
        ` : products.map(product => `

            <div
                class="${showDiscount ? 'grid-cols-10' : 'grid-cols-9'} grid gap-5 items-center p-5 border-b min-w-[900px]"
                data-id="${product.id}"
            >
                <!-- ID -->
                <div class="text-xs text-gray-400 truncate" title="${product.id}">${product.id}</div>

                <!-- IMGS -->
                <div class="img-cell flex flex-col gap-1">

                    <!-- Vista normal: 4 miniaturas (click → lightbox) -->
                    <div class="img-thumbs flex flex-wrap gap-1">
                        ${(product.images || []).slice(0, 4).map((img, idx) => `
                            <img
                                src="${normalizeImgPath(img)}"
                                class="w-7 h-7 object-cover rounded-lg cursor-pointer hover:scale-110 transition border border-gray-200 img-thumb"
                                data-full="${normalizeImgPath(img)}"
                                data-index="${idx}"
                                onerror="this.src='https://placehold.co/64x64?text=${idx+1}'"
                                title="Ver imagen ${idx + 1}"
                            >
                        `).join("")}
                    </div>

                    <!-- Vista edición: 4 miniaturas con botón cambiar -->
                    <div class="img-edit-mode hidden flex flex-wrap gap-1">
                        ${(product.images || ['','','','']).slice(0, 4).map((img, idx) => `
                            <div class="relative group/img">
                                <img
                                    src="${normalizeImgPath(img) || 'https://placehold.co/64x64?text=${idx+1}'}"
                                    class="w-12 h-12 object-cover rounded-lg border-2 border-dashed border-gray-300 img-edit-thumb"
                                    data-img-index="${idx}"
                                    onerror="this.src='https://placehold.co/64x64?text=${idx+1}'"
                                >
                                <!-- Input oculto que guarda la URL seleccionada -->
                                <input
                                    type="hidden"
                                    class="img-url-input"
                                    value="${img}"
                                    data-img-index="${idx}"
                                >
                                <!-- Botón lápiz encima de la imagen -->
                                <button
                                    class="img-pick-btn absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 group-hover/img:opacity-100 transition text-white text-lg"
                                    data-img-index="${idx}"
                                    title="Cambiar imagen ${idx + 1}"
                                >✏️</button>
                            </div>
                        `).join("")}
                    </div>

                </div>

                <!-- NAME -->
                <div>
                    <span class="text-value">${product.name}</span>
                    <input type="text" value="${product.name}" class="edit-input hidden border rounded-lg px-2 py-1 w-full text-sm">
                </div>

                <!-- PRICE -->
                <div>
                    <span class="text-value">$${product.price.toLocaleString()}</span>
                    <input type="number" value="${product.price}" class="edit-input hidden border rounded-lg px-2 py-1 w-full text-sm">
                </div>

                <!-- COMPARE AT PRICE -->
                ${showDiscount ? `<div>
                    <span class="text-value">$${product.compareAtPrice.toLocaleString()}</span>
                    <input type="number" value="${product.compareAtPrice}" class="edit-input hidden border rounded-lg px-2 py-1 w-full text-sm">
                </div>` : ''}

                <!-- CATEGORY -->
                <div>
                    <span class="text-value">${product.category}</span>
                    <input type="text" value="${product.category}" class="edit-input hidden border rounded-lg px-2 py-1 w-full text-sm">
                </div>

                <!-- MATERIAL -->
                <div>
                    <span class="text-value">${product.material}</span>
                    <input type="text" value="${product.material}" class="edit-input hidden border rounded-lg px-2 py-1 w-full text-sm">
                </div>

                <!-- STYLE -->
                <div>
                    <span class="text-value">${product.style}</span>
                    <input type="text" value="${product.style}" class="edit-input hidden border rounded-lg px-2 py-1 w-full text-sm">
                </div>

                <!-- STOCK -->
                <div>
                    <span class="text-value">${product.stock}</span>
                    <input type="number" value="${product.stock}" class="edit-input hidden border rounded-lg px-2 py-1 w-full text-sm">
                </div>

                <!-- ACTIONS -->
                <div class="flex flex-col gap-2">
                    <button class="edit-btn bg-blue-500 text-white px-3 py-1 rounded-xl text-sm">Editar</button>
                    <button class="save-btn hidden bg-green-500 text-white px-3 py-1 rounded-xl text-sm">Guardar</button>
                    <button class="delete-btn bg-red-500 text-white px-3 py-1 rounded-xl text-sm">Eliminar</button>
                </div>

            </div>

        `).join("")}

    </div>

</section>


<!-- MODAL AGREGAR PRODUCTO -->
<div id="add-product-modal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">

        <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold text-gray-800">Agregar nuevo producto</h2>
            <button id="close-modal-btn" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>

        <div class="grid grid-cols-2 gap-4">

            <div class="col-span-2">
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Nombre *</label>
                <input id="new-name" type="text" placeholder="Ej: Sofá nórdico de 3 puestos" class="w-full border rounded-xl px-3 py-2 text-sm">
            </div>

            <div>
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Precio *</label>
                <input id="new-price" type="number" placeholder="1200000" class="w-full border rounded-xl px-3 py-2 text-sm">
            </div>

            <div>
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Precio comparación</label>
                <input id="new-compareAtPrice" type="number" placeholder="1000000" class="w-full border rounded-xl px-3 py-2 text-sm">
            </div>

            <div>
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Categoría *</label>
                <select id="new-category" class="w-full border rounded-xl px-3 py-2 text-sm">
                    <option value="">Seleccionar...</option>
                    <option value="sala">Sala &amp; Descanso</option>
                    <option value="comedor">Comedor &amp; Reunión</option>
                    <option value="dormitorio">Descanso &amp; Intimidad</option>
                    <option value="detalles">Detalles que Cuentan</option>
                </select>
            </div>

            <div>
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Stock</label>
                <input id="new-stock" type="number" placeholder="0" value="0" class="w-full border rounded-xl px-3 py-2 text-sm">
            </div>

            <div>
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Material</label>
                <input id="new-material" type="text" placeholder="Madera + tela" class="w-full border rounded-xl px-3 py-2 text-sm">
            </div>

            <div>
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Estilo</label>
                <input id="new-style" type="text" placeholder="Nórdico / Minimalista" class="w-full border rounded-xl px-3 py-2 text-sm">
            </div>

            <div class="col-span-2">
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Resumen corto</label>
                <input id="new-summary" type="text" placeholder="Descripción breve del producto" class="w-full border rounded-xl px-3 py-2 text-sm">
            </div>

            <div class="col-span-2">
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Descripción completa</label>
                <textarea id="new-description" rows="3" placeholder="Descripción detallada..." class="w-full border rounded-xl px-3 py-2 text-sm resize-none"></textarea>
            </div>

            <div>
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Ideal para</label>
                <input id="new-idealFor" type="text" placeholder="Sala · Dormitorio" class="w-full border rounded-xl px-3 py-2 text-sm">
            </div>

            <div>
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">Almacenamiento</label>
                <input id="new-storage" type="text" placeholder="No incluye / Cajón inferior" class="w-full border rounded-xl px-3 py-2 text-sm">
            </div>

            <div class="col-span-2">
                <label class="text-xs font-semibold uppercase text-gray-500 mb-1 block">URL de imagen principal</label>
                <input id="new-image" type="text" placeholder="https://... o /src/assets/img/catalogo/..." class="w-full border rounded-xl px-3 py-2 text-sm">
            </div>

            <div class="flex items-center gap-2">
                <input id="new-featured" type="checkbox" class="rounded">
                <label class="text-sm text-gray-600">¿Producto destacado?</label>
            </div>

${showDiscount ? `
            <div class="flex items-center gap-2">
                <input id="new-discount" type="checkbox" class="rounded" checked>
                <label class="text-sm text-gray-600">¿Tiene descuento?</label>
            </div>
            ` : `
            <input id="new-discount" type="hidden" value="false">
            `}

        </div>

        <div id="modal-error" class="hidden mt-4 text-red-500 text-sm"></div>

        <div class="flex gap-3 mt-6 justify-end">
            <button id="cancel-modal-btn" class="px-5 py-2 rounded-xl border text-sm text-gray-600 hover:bg-gray-50">Cancelar</button>
            <button id="confirm-add-btn" class="px-5 py-2 rounded-xl bg-[#5C7A6B] text-white text-sm font-medium hover:bg-[#4a6558]">Guardar producto</button>
        </div>

    </div>
</div>

<!-- LIGHTBOX IMÁGENES -->
<div id="img-lightbox" class="hidden fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
    <div class="relative max-w-lg w-full">
        <button id="lightbox-close" class="absolute -top-10 right-0 text-white text-3xl leading-none hover:text-gray-300">&times;</button>
        <img id="lightbox-img" src="" class="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl">
        <p id="lightbox-label" class="text-center text-white/60 text-sm mt-3"></p>
    </div>
</div>

<!-- PICKER DE IMÁGENES DEL PROYECTO -->
<div id="img-picker-modal" class="hidden fixed inset-0 bg-black/70 z-[70] flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col">

        <div class="flex items-center justify-between p-6 border-b">
            <h3 class="font-semibold text-gray-800">Seleccionar imagen</h3>
            <button id="picker-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>

        <div class="overflow-y-auto p-6">
            <div class="grid grid-cols-4 gap-3">
                ${ALL_PROJECT_IMAGES.map(imgPath => `
                    <div class="picker-option cursor-pointer group/pick" data-path="${imgPath}">
                        <img
                            src="${imgPath}"
                            class="w-full aspect-square object-cover rounded-xl border-2 border-transparent group-hover/pick:border-[#5C7A6B] transition"
                            onerror="this.parentElement.style.display='none'"
                        >
                    </div>
                `).join("")}
            </div>
        </div>

    </div>
</div>
`;