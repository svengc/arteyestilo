export function footerEssence() {
    const bannerContacto = document.getElementById("footerEsencia");
    if (bannerContacto){
        bannerContacto.innerHTML = `
            <img src="../../assets/img/other/banner-footer-esencial.jpg" class="w-full h-full object-cover" alt="">
            <div
                class="absolute inset-0 bg-[linear-gradient(to_right,rgba(12,10,8,0.9)_0%,rgba(12,10,8,0.7)_55%,rgba(12,10,8,0.3)_100%)]">
            </div>
            <div class="absolute inset-0 flex items-center">
                <div class="w-full md:w-1/2 px-6 md:px-16 text-left ">
                    <p class="font-semibold font-montserrat text-xs md:text-sm opacity-80 tracking-wider text-banner">
                        Arte & Estilo
                    </p>
                    <hr class="w-16 border-slate-300 my-2 md:my-4 mr-auto border-subrayado">
                    <h2 class="text-2xl w-3/4 md:text-4xl font-semibold mt-3 font-cormorant leading-tight tracking-wide text-title-alt">
                        Tu hogar merece una historia que valga la pena contar.
                    </h2>
                    <p class="mt-4 hidden md:block text-base text-form md:max-w-7xl md:leading-loose font-montserrat tracking-normal">
                        Descubre piezas únicas diseñadas para quienes eligen vivir con intención. Porque quienes buscan lo extraordinario merecen encontrarlo sin tener que buscarlo muy lejos.
                    </p>
                    <p class="my-3 block md:hidden text-sm text-form max-w-sm font-montserrat leading-relaxed">
                        Más que mobiliario, ofrecemos el arte de vivir bien...
                    </p>
                    <div class="mt-4 flex items-center gap-3 md:gap-4">
                        <a href="./colecciones.html"
                            class="bg-olive-600 text-white text-xs md:text-sm font-medium uppercase px-3 py-1.5 md:px-5 md:py-2 rounded transition bg-btn ">
                            <span class="block md:hidden font-montserrat text-btn">Explora la colección</span>
                            <span class="hidden md:block font-montserrat text-btn">Explora la colección</span>
                        </a>
                        <a href="#" class="text-xs md:text-sm text-white/90 hover:text-white transition">
                            <span class="block md:hidden font-montserrat text_alt">Habla con un Asesor</span>
                            <span class="hidden md:block font-montserrat text_alt">Hablar con un asesor</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}