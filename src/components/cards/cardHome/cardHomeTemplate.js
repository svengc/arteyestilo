

export const cardHomeTemplate = (product) => `
    <a
        href="#"
        class="group relative h-[350px] md:h-[400px] w-[250px] flex-shrink-0 overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 md:w-[350px]"
        style="
            background-image:url('${product.images[0]}');
            background-size:cover;
            background-position:center;
        "
    >

        <div class="absolute inset-0 bg-black/70 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"></div>

        <div class="relative z-10 flex h-full flex-col justify-end gap-2 p-4 text-center text-white transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
            <h2 class="font-cormorant text-2xl font-bold">
                ${product.name}
            </h2>
            <p class="font-montserrat text-sm">
                ${product.summary}
            </p>
            <p class="font-semibold">
                $${product.price.toLocaleString()}
            </p>
        </div>
    </a>
`;

export const cardHomeTemplateDiscount = (product) => `
    <a
        href="#"
        class="group relative h-[350px] md:h-[400px] w-[250px] flex-shrink-0 overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 md:w-[350px]"
        style="
            background-image:url('${product.images[0]}');
            background-size:cover;
            background-position:center;
        "
    >
        <div class="absolute inset-0 bg-black/70 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"></div>
        <div class="relative z-10 flex h-full flex-col justify-end gap-2 p-4 text-center text-white transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
            <h2 class="font-cormorant text-2xl font-bold">
                ${product.name}
            </h2>
            <p class="font-semibold">
                ${product.summaryDiscount.toLocaleString()}
            </p>
            <div class="flex items-center justify-center gap-4">
                
             </div>
        </div>
    </a>
`;