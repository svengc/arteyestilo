export const productImgandShop = (product) => `
<a href="infoCardProduct.html?id=${product.id}">
    <div class="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">

        <!-- IMAGEN -->
        <div class="w-full md:w-1/2">
            <img 
                src="${product.images[0]}" 
                class="w-full h-full object-cover rounded-xl"
            />
        </div>

        <!-- INFO -->
        <div class="w-full md:w-1/2 flex flex-col justify-center gap-6">

            <h1 class="text-2xl md:text-4xl font-cormorant">
                ${product.name}
            </h1>

            <p class="text-lg font-montserrat">
                $${product.price.toLocaleString()}
            </p>

            <div class="flex gap-4">
                <input type="number" value="1" min="1"
                    class="w-20 border rounded-md text-center">

                <button class="px-5 py-3 bg-black text-white">
                    Agregar al carrito
                </button>

                <button class="px-5 py-3 border">
                    Guardar
                </button>
            </div>

        </div>

    </div>
</a>
`;