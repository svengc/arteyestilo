export const tableProductTemplate = (products) => `

<section class="w-full min-h-screen p-6 bg-gray-100">

    <div class="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        <div class="grid grid-cols-11 gap-4 bg-[#5C7A6B] text-white p-5 font-semibold text-sm uppercase tracking-wide">

            <div>ID</div>
            <div>Imagen</div>
            <div>Nombre</div>
            <div>Precio</div>
            <div>Descuento</div>
            <div>Categoría</div>
            <div>Material</div>
            <div>Estilo</div>
            <div>Stock</div>
            <div>Destacado</div>
            <div>Acciones</div>

        </div>

        ${products.map(product => `

            <div class="grid grid-cols-11 gap-4 items-center p-5 border-b">

                <div>${product.id}</div>

                <div>
                    <img 
                        src="${product.images[0]}" 
                        class="w-16 h-16 object-cover rounded-xl"
                    >
                </div>

                <div>${product.name}</div>

                <div>
                    $${product.price.toLocaleString()}
                </div>

                <div>
                    $${product.compareAtPrice.toLocaleString()}
                </div>

                <div>${product.category}</div>

                <div>${product.material}</div>

                <div>${product.style}</div>

                <div>${product.stock}</div>

                <div>
                    ${product.featured ? "Sí" : "No"}
                </div>

                <div class="flex gap-2">

                    <button class="bg-blue-500 text-white px-3 py-2 rounded-xl">
                        Editar
                    </button>

                    <button class="bg-red-500 text-white px-3 py-2 rounded-xl">
                        Eliminar
                    </button>

                </div>

            </div>

        `).join("")}

    </div>

</section>
`;