export const cardProdTemplate = () => `
<section class=" cardProd-admin flex flex-col max-w-7xl mx-auto p-6">

    <div class="flex items-center justify-between mb-6">
        <a href="/src/controllers/admin/adminPage/admin.html" class="underline">
            Volver
        </a>
    </div>

    <div class="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div 
            class="group block w-full max-w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-lg transition hover:scale-105 cursor-pointer"
            data-step="productsNormal"
        >

            <div 
                class="h-1/2 bg-black bg-cover bg-center bg-no-repeat"
                style="background-image: url('https://placehold.co/300x400');"
            >
            </div>        

            <div class="h-1/2 bg-red-100 flex flex-col items-center justify-center p-6 text-center">

                <h2 class="text-xl font-semibold mb-4">
                    Producto sin descuento
                </h2>

                <button 
                    class="bg-[#6FA8ED] text-white py-2 px-5 rounded-xl transition hover:bg-[#5b96df]"
                >
                    Ir al panel
                </button>

            </div>

        </div>

    </div>

</section>
`;