export const tableProductTemplate = (products) => `

<section class="w-full max-h-screen p-6 bg-gray-100">

    <div class="flex items-center justify-between mb-6">
        <a href="/src/controllers/admin/adminPage/admin.html" class="underline">
            Volver
        </a>
    </div>

    <div class="mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        <!-- HEADER -->
        <div class="grid grid-cols-10 gap-4 bg-[#5C7A6B] text-white p-5 font-semibold text-sm uppercase tracking-wide">

            <div>ID</div>
            <div>Imagen</div>
            <div>Nombre</div>
            <div>Precio</div>
            <div>Descuento</div>
            <div>Categoría</div>
            <div>Material</div>
            <div>Estilo</div>
            <div>Stock</div>
            <div>Acciones</div>

        </div>

        ${products.map(product => `

            <div 
                class="grid grid-cols-10 gap-5 items-center p-5 border-b"
                data-id="${product.id}"
            >

                <!-- ID -->
                <div>${product.id}</div>

                <!-- IMG -->
                <div>
                    <img 
                        src="${product.images[0]}" 
                        class="w-16 h-16 object-cover rounded-xl"
                    >
                </div>

                <!-- NAME -->
                <div>
                    <span class="text-value">
                        ${product.name}
                    </span>

                    <input 
                        type="text"
                        value="${product.name}"
                        class="edit-input hidden border rounded-lg px-2 py-1 w-full"
                    >
                </div>

                <!-- PRICE -->
                <div>
                    <span class="text-value">
                        ${product.price}
                    </span>

                    <input 
                        type="number"
                        value="${product.price}"
                        class="edit-input hidden border rounded-lg px-2 py-1 w-full"
                    >
                </div>

                <!-- DISCOUNT -->
                <div>
                    <span class="text-value">
                        ${product.compareAtPrice}
                    </span>

                    <input 
                        type="number"
                        value="${product.compareAtPrice}"
                        class="edit-input hidden border rounded-lg px-2 py-1 w-full"
                    >
                </div>

                <!-- CATEGORY -->
                <div>
                    <span class="text-value">
                        ${product.category}
                    </span>

                    <input 
                        type="text"
                        value="${product.category}"
                        class="edit-input hidden border rounded-lg px-2 py-1 w-full"
                    >
                </div>

                <!-- MATERIAL -->
                <div>
                    <span class="text-value">
                        ${product.material}
                    </span>

                    <input 
                        type="text"
                        value="${product.material}"
                        class="edit-input hidden border rounded-lg px-2 py-1 w-full"
                    >
                </div>

                <!-- STYLE -->
                <div>
                    <span class="text-value">
                        ${product.style}
                    </span>

                    <input 
                        type="text"
                        value="${product.style}"
                        class="edit-input hidden border rounded-lg px-2 py-1 w-full"
                    >
                </div>

                <!-- STOCK -->
                <div>
                    <span class="text-value">
                        ${product.stock}
                    </span>

                    <input 
                        type="number"
                        value="${product.stock}"
                        class="edit-input hidden border rounded-lg px-2 py-1 w-full"
                    >
                </div>

                <!-- ACTIONS -->
                <div class="flex gap-2">

                    <button 
                        class="edit-btn bg-blue-500 text-white px-3 py-2 rounded-xl"
                    >
                        Editar
                    </button>

                    <button 
                        class="save-btn hidden bg-green-500 text-white px-3 py-2 rounded-xl"
                    >
                        Guardar
                    </button>

                    <button 
                        class="bg-red-500 text-white px-3 py-2 rounded-xl"
                    >
                        Eliminar
                    </button>

                </div>

            </div>

        `).join("")}

    </div>

</section>
`;