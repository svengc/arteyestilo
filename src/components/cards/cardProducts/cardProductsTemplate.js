export const cardProductTemplate = (product) => `
    <a
        href="/src/pages/infoCardProduct/infoCardProduct.html?id=${product.id}"
        class="group relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105"
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
