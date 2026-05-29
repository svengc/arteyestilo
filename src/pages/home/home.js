import { initNavbarabs } from "../../components/navbar/navbar.js";
import { initFilterCatalogMenu } from "../../controllers/home/homeController.js";
import { initCardHome, initCardHomeDiscount } from "../../components/cards/cardHome/cardHome.js";
import { footerHome } from "../../components/footer/footerHome.js";

document.addEventListener("DOMContentLoaded", () => {
    initNavbarabs();

    const bannerPrincipal = document.getElementById("bannerPrincipal");
    if (bannerPrincipal){
        bannerPrincipal.innerHTML = `
            <section class="relative h-screen overflow-hidden">
                <img src="../../assets/img/banner/banner.jpg" class="absolute inset-0 w-full h-full object-cover" alt="Banner">
                <div class="absolute inset-0 bg-black/50"></div>
                <div class="relative z-10 flex flex-col justify-center md:justify-end h-full px-6 md:px-20 pb-10 md:pb-20 pt-24 md:pt-32">
                    <p class="max-w-6xl text-white font-cormorant font-bold 
                            text-3xl md:text-6xl leading-tight
                            text-center md:text-left
                             translate-y-4 transition-all duration-1000">
                        Decora como tú eres. Sin moldes, sin reglas.
                        <br>
                        <span class="block mt-2 font-montserrat font-normal 
                                    text-sm md:text-xl text-white/80">
                            Piezas únicas para casas que tienen algo que contar.
                        </span>
                    </p>
                </div>
            </section>
        `;
    }
    initFilterCatalogMenu();
    initCardHome();
    const bannerSecondario = document.getElementById("bannerSecundario");
    if (bannerSecondario){
        bannerSecondario.innerHTML = `
        <section class="relative mb-4 h-[350px] md:h-[650px] overflow-hidden bg-entregado">
            <!-- Imagen -->
            <img
                src="../../assets/img/other/banner-comedor.jpg"
                alt=""
                class="h-full w-3/5 md:rounded-2xl rounded-r-lg object-cover object-center brightness-50"
            >
            <!-- Contenido -->
            <div class="absolute inset-y-0 right-0 flex w-2/3 flex-col items-end justify-center gap-4 px-6 text-end">
                <p class="text-title-alt max-w-2xl font-cormorant text-xl md:text-4xl font-bold leading-snug tracking-wide text-black">
                    A veces un solo mueble lo cambia todo.
                </p>
                <span class="text_numeral_alt max-w-xl font-montserrat text-sm md:text-lg text-black/80">
                    No hace falta renovar todo. Solo elegir bien.
                </span>
            </div>
        </section>
        `;
    }
    initCardHomeDiscount();
    footerHome();
    
});