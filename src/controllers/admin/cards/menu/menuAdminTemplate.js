export const menuProdTemplate = (product) => `
<section class="flex flex-col max-w-7xl mx-auto p-6">


            <div class="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <a 
                    class="group block w-full max-w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-lg transition hover:scale-105"
                    data-step="products"
                    
                >
                    <div 
                        class="h-1/2 bg-black bg-cover bg-center bg-no-repeat"
                        style="background-image: url('https://placehold.co/300x400');"
                    >
                    </div>        
                    <div class="h-1/2 bg-red-100 flex flex-col items-center justify-center p-6 text-center">
                        <h2 class="text-xl font-semibold mb-4">
                            Administrar producto
                        </h2>
                        <button 
                            class="bg-[#6FA8ED] text-white py-2 px-5 rounded-xl transition hover:bg-[#5b96df]"
                        >
                            Ir al panel
                        </button>
                    </div>
                </a>
                <a 
                    class="group block w-full max-w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-lg transition hover:scale-105"
                    href="# "
                >
                    <div 
                        class="h-1/2 bg-black bg-cover bg-center bg-no-repeat"
                        style="background-image: url('https://placehold.co/300x400');"
                    >
                    </div>        
                    <div class="h-1/2 bg-red-100 flex flex-col items-center justify-center p-6 text-center">
                        <h2 class="text-xl font-semibold mb-4">
                            Usuarios
                        </h2>
                        <button 
                            class="bg-[#6FA8ED] text-white py-2 px-5 rounded-xl transition hover:bg-[#5b96df]"
                        >
                            Gestionar
                        </button>
                    </div>
                </a>
            </div>
        
        </section>
`