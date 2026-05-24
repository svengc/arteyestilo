export const cardProductTemplate = (product) => `
    <a href="infoCardProducto.html?id=${product.id}" class="flex flex-col md:flex-row justify-center gap-4 mb-6 max-w-5xl mx-auto">
                <div id="imagenes" class="grid grid-cols-2 auto-rows-[140px] md:auto-rows-[180px] gap-4 w-full md:w-1/2"></div>
                <div class="w-full md:w-1/2 flex flex-col justify-center px-5 md:h-167.5 gap-6">
                    <div class="flex items-center md:gap-2">
                        <div class="flex flex-col gap-1 w-3/5 md:w-3/5">
                            <h1 id="nombreProducto"
                                class="font-semibold text-xl pr-1 md:pr-2 md:text-3xl font-cormorant tracking-wide text-title">

                            </h1>
                        </div>
                        <div class="flex flex-col gap-2 w-2/5 md:w-3/5">
                            <p id="precioProducto"
                                class="text-sm md:text-lg font-montserrat tracking-normal text-paragraph">

                            </p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 flex-wrap">
                        <input id="productQuantity" type="number" min="1" value="1" step="1"
                            class="w-20 text-center text-sm font-montserrat text-title border border-subrayado rounded-md focus:outline-none">
                        <button id="addToCartButton" type="button"
                            class="bg-btn text-btn font-montserrat text-xs uppercase tracking-widest px-5 py-3 transition hover:opacity-90 cursor-pointer">
                            Agregar al carrito
                        </button>
                        <button id="toggleFavoriteButton" type="button"
                            class="border border-subrayado text-title font-montserrat text-xs uppercase tracking-widest px-5 py-3 rounded-md">
                            Guardar
                        </button>
                    </div>
                    <p id="productMessage" class="font-montserrat text-xs text-title-alt tracking-wide"></p>
                    <p class="font-montserrat text-xs text-hint tracking-wide">
                        Envío seguro · Garantía incluida · Devolución sin complicaciones
                    </p>
                </div>
            </a>
`;
