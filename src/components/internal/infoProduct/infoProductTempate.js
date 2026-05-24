export const productImgandShop = (product) => `
    <div class="flex flex-col md:flex-row justify-center gap-4 mb-6 max-w-5xl mx-auto">

        <!-- IMÁGENES -->
        <div class="grid grid-cols-2 auto-rows-[140px] md:auto-rows-[180px] gap-4 w-full md:w-1/2">

            <img 
                src="${product.images[0]}" 
                class="w-full h-full object-cover rounded-xl" 
                alt="${product.name}"
            >

        </div>

        <!-- INFO -->
        <div class="w-full md:w-1/2 flex flex-col justify-center px-5 gap-6">

            <h1 class="font-semibold text-xl md:text-3xl font-cormorant tracking-wide text-title">
                ${product.name}
            </h1>

            <p class="text-sm md:text-lg font-montserrat text-paragraph">
                $${product.price.toLocaleString()}
            </p>

            <div class="flex items-center gap-4 flex-wrap">

                <input 
                    type="number" 
                    min="1" 
                    value="1"
                    class="w-20 text-center text-sm font-montserrat border border-subrayado rounded-md"
                >

                <button class="bg-btn text-btn px-5 py-3 text-xs uppercase">
                    Agregar al carrito
                </button>

                <button class="border border-subrayado px-5 py-3 text-xs uppercase">
                    Guardar
                </button>

            </div>

            <p class="font-montserrat text-xs text-hint">
                Envío seguro · Garantía incluida · Devolución sin complicaciones
            </p>

        </div>

    </div>
`;