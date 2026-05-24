export function footerContact() {
    const bannerContacto = document.getElementById("footerEsencia");
    if (bannerContacto){
        bannerContacto.innerHTML = `
            <img src="../../assets/img/banner/banner-footer-contacto.jpg" class="absolute inset-0 w-full h-full object-cover object-center" alt="">
            <div class="absolute inset-0 bg-black/80"></div>
            <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-5">
                <p class="text-white font-cormorant font-bold tracking-wide 
                        text-xl md:text-4xl max-w-2xl leading-snug">
                    ¿Te está rondando una idea en la cabeza?
                </p>    
                <span class="text-white/80 font-montserrat 
                            text-sm md:text-lg max-w-xl">
                    Cuéntanos cómo la imaginas y te ayudamos a hacerla realidad.
                </span>
                <a href="#" class="mt-4 px-6 py-3 bg-white text-black rounded-xl 
                        text-sm md:text-base font-medium 
                        hover:bg-neutral-200 transition">
                    Escríbenos
                </a>
            </div>
        `;
    }
}