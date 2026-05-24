export const productImgandShopDiscount = (product) => `
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

                <div class="flex gap-2 w-2/5">
                    <p class="text-sm md:text-lg font-montserrat text-paragraph ">
                        Antes <br> <span class = "line-through">$${product.price.toLocaleString()}</span>
                    </p>
                    <p class="text-sm md:text-lg font-montserrat text-paragraph">
                        Ahora <br> $${product.compareAtPrice.toLocaleString()}
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
`;

export const productDescriptionDiscount = (product) => `
<div class="max-w-5xl mx-auto px-5 md:px-0 flex flex-col md:flex-row gap-6 mb-10">
    <div class="w-full md:w-1/2 flex flex-col justify-center gap-4 mx-auto">
                <h2 class="font-semibold text-2xl md:text-3xl font-cormorant tracking-wide text-title">
                    Por qué te va a <em>encantar.</em>
                </h2>
                <p class="text-sm md:text-lg font-montserrat tracking-normal text-paragraph">
                ${product.description}
                </p>
            </div>
            <div class="w-full md:w-1/2 flex flex-col justify-center gap-4 mx-auto">
                <h2 class="text-2xl md:text-3xl font-cormorant tracking-normal text-title">
                    Lo que necesitas <em>saber.</em>
                </h2>
                <div class="w-full space-y-2">
                    <div class="md:grid md:grid-cols-2 md:gap-4 md:items-start">
                        <h3 class="text-xl font-bold md:text-2xl font-cormorant text-title-alt mb-1
                        my-0 md:my-auto">
                            Categoría
                        </h3>
                        <p class="text-sm md:text-lg font-bold font-montserrat text-title-alt mb-1 md:mb-0">
                        ${product.category}
                        </p>
                    </div>
                    <hr class="border-subrayado">
                    <div class="md:grid md:grid-cols-2 md:gap-4 md:items-start">
                        <h3 class="text-xl font-semibold text_numeral_alt md:text-2xl font-cormorant mb-1 md:my-auto">
                            Material
                        </h3>
                        <p class="text-sm md:text-lg font-montserrat text-paragraph mb-2 md:mb-0">
                        ${product.material}
                        </p>
                    </div>
                    <hr class="border-subrayado">
                    <div class="md:grid md:grid-cols-2 md:gap-4 md:items-start">
                        <h3 class="text-xl font-semibold text_numeral_alt md:text-2xl font-cormorant mb-1 md:my-auto">
                            Estilo
                        </h3>
                        <p class="text-sm md:text-lg font-montserrat text-paragraph mb-2 md:mb-0">
                        ${product.style}
                        </p>
                    </div>
                    <hr class="border-subrayado">
                    <div class="md:grid md:grid-cols-2 md:gap-4 md:items-start">
                        <h3 class="text-xl font-semibold text_numeral_alt md:text-2xl font-cormorant mb-1 md:my-auto">
                            Almacenamiento
                        </h3>
                        <p class="text-sm md:text-lg font-montserrat text-paragraph mb-2 md:mb-0">
                        ${product.storage}
                        </p>
                    </div>
                    <hr class="border-subrayado">
                    <div class="md:grid md:grid-cols-2 md:gap-4 md:items-start">
                        <h3 class="text-xl font-semibold text_numeral_alt md:text-2xl font-cormorant mb-1 md:my-auto">
                            Ideal para
                        </h3>
                        <p class="text-sm md:text-lg font-montserrat text-paragraph mb-2 md:mb-0">
                            ${product.idealFor}
                        </p>
                    </div>
                    <hr class="border-subrayado">
                    <div class="md:grid md:grid-cols-2 md:gap-4 md:items-start">
                        <h3 class="text-xl font-semibold text_numeral_alt md:text-2xl font-cormorant mb-1 md:my-auto">
                            Garantía
                        </h3>
                        <p class="text-sm md:text-lg font-montserrat text-paragraph mb-2 md:mb-0">
                        ${product.guarantee}
                        </p>
                    </div>
                </div>
            </div>
</div>
`;