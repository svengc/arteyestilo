export const cardProdTemplate = () => `
<section class="flex flex-col max-w-7xl mx-auto p-6">

    <div class="grid place-items-center grid-cols-1 md:grid-cols-2 gap-8">

        <!-- PRODUCTOS NORMALES -->
        <div 
            class="group block w-full max-w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
            data-step="productsNormal"
        >

            <div 
                class="h-1/2 bg-cover bg-center"
                style="background-image:url('https://placehold.co/300x400')"
            ></div>

            <div class="h-1/2 bg-red-100 flex flex-col items-center justify-center px-4">

                <h2 class="text-xl font-semibold mb-4">
                    Producto sin descuento
                </h2>

                <button class="bg-blue-500 text-white px-5 py-2 rounded-xl">
                    Ver tabla
                </button>

            </div>

        </div>

        <!-- PRODUCTOS DESCUENTO -->
        <div 
            class="group block w-full max-w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
            data-step="productsDiscount"
        >

            <div 
                class="h-1/2 bg-cover bg-center"
                style="background-image:url('https://placehold.co/300x400')"
            ></div>

            <div class="h-1/2 bg-green-100 flex flex-col items-center justify-center px-4">

                <h2 class="text-xl font-semibold mb-4">
                    Producto con descuento
                </h2>

                <button class="bg-green-500 text-white px-5 py-2 rounded-xl">
                    Ver tabla
                </button>

            </div>

        </div>

    </div>

</section>
`;