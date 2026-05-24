export const productImgandShop = (product) => `
<a href="product.html?id=${product.id}">
    <div class="flex flex-col md:flex-row justify-center gap-4 mb-6 max-w-5xl mx-auto">

        <div class="grid grid-cols-2 auto-rows-[140px] md:auto-rows-[180px] gap-4 w-full md:w-1/2">
            ${product.images.map(img => `
                <img src="${img}" class="w-full h-full object-cover rounded-xl"/>
            `).join("")}
        </div>
        <div class="w-full md:w-1/2 flex flex-col justify-center px-5 md:h-167.5 gap-6">

            <div class="flex items-center md:gap-2">

                <div class="flex flex-col gap-1 w-3/5">
                    <h1 class="font-semibold text-xl md:text-3xl font-cormorant text-title">
                        ${product.name}
                    </h1>
                </div>

                <div class="flex flex-col gap-2 w-2/5">
                    <p class="text-sm md:text-lg font-montserrat text-paragraph">
                        $${product.price}
                    </p>
                </div>

            </div>

            <div class="flex items-center gap-4 flex-wrap">
                <input type="number" min="1" value="1"
                    class="w-20 text-center border rounded-md">

                <button class="bg-btn text-white px-5 py-3">
                    Agregar al carrito
                </button>

                <button class="border px-5 py-3">
                    Guardar
                </button>
            </div>

            <p class="text-xs text-gray-500">
                Envío seguro · Garantía incluida · Devolución sin complicaciones
            </p>

        </div>
    </div>
</a>
`;