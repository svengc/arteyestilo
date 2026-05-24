export function footerInfoProductCard(product) {

    const bannerContacto = document.getElementById("footerInfoProductCard");

    if (!bannerContacto || !product) return;

    bannerContacto.innerHTML = `
    
        <img 
            src="${product.footerImage}" 
            class="w-full h-full object-cover" 
            alt="${product.name}"
        >

        <div class="absolute inset-0 
            bg-[linear-gradient(to_right,rgba(12,10,8,0.9)_0%,rgba(12,10,8,0.7)_55%,rgba(12,10,8,0.3)_100%)]">
        </div>

        <div class="absolute inset-0 flex items-center">

            <div class="w-full md:w-1/2 px-6 md:px-16 text-left">

                <p class="font-montserrat font-semibold text-xs md:text-sm tracking-wider opacity-80 text-banner">
                    Arte & Estilo
                </p>

                <hr class="w-16 my-2 md:my-4 mr-auto border-subrayado border-slate-300">

                <h2 class="w-3/4 mt-3 text-2xl md:text-4xl font-semibold leading-tight tracking-wide font-cormorant text-title-alt">
                    Tu hogar merece una historia que valga la pena contar.
                </h2>

                <p class="hidden md:block mt-4 text-base leading-loose tracking-normal font-montserrat text-form md:max-w-7xl">
                    Descubre piezas únicas diseñadas para quienes eligen vivir con intención.
                </p>

            </div>

        </div>
    `;
}

