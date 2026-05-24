export const navbarTemplateFix = () => `
<header class="sticky top-0 z-50 backdrop-blur-sm bg-[rgba(92,122,107,0.5)]">

    <nav class="mx-auto max-w-7xl px-4 md:px-8 py-3 md:py-4">

        <div class="grid grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-6">

            <!-- Menú -->
            <div class="relative">

                <button
                    id="menuBtn"
                    class="h-11 px-5 rounded-full border border-white/15 bg-white/5 text-white flex items-center gap-2 hover:bg-white/10">

                    <img
                        src="../../assets/icons/menu.svg"
                        alt="Arte & Estilo"
                        class="w-5 h-5 md:w-6 md:h-6"
                    >

                    <span class="hidden md:block text-xs uppercase tracking-[0.28em]">
                        Menú
                    </span>

                </button>

                <ul
                    id="menu"
                    class="absolute top-full left-0 mt-3 w-64 flex flex-col gap-4 p-5 rounded-2xl border border-white/10 bg-[rgba(17,24,39,0.92)] text-xs uppercase tracking-[0.28em] text-white opacity-0 scale-95 pointer-events-none transition-all duration-300">

                    <li><a href="../../pages/home/home.html">Inicio</a></li>
                    <li><a href="../../pages/collections/collections.html">Colecciones</a></li>
                    <li><a href="../../pages/essence/essence.html">Nuestra Esencia</a></li>
                    <li><a href="../../pages/contact/contact.html">Contacto</a></li>

                </ul>

            </div>

            <!-- Logo -->
            <div class="flex justify-center min-w-0">

                <a href="../../pages/home/home.html" class="w-[230px] md:w-[450px]">
                    <img
                        src="../../assets/logos/A&E_Logo.svg"
                        alt="Arte & Estilo"
                        class="w-full"
                    >
                </a>

            </div>

            <!-- Acciones -->
            <div class="flex items-center gap-3 md:gap-4">

                <a
                    href="../account/myProfile.html"
                    class="flex h-9 md:h-11 w-9 md:w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10">

                    <img
                        src="../../assets/icons/shopping_cart.svg"
                        alt="Carrito"
                        class="h-5 md:h-6 w-5 md:w-6 object-cover rounded-full"
                    />

                </a>

                <div class="relative">

                    <button
                        id="userMenuButton"
                        class="flex h-9 md:h-11 w-9 md:w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10">

                        <img
                            src="../../assets/icons/account_icon.svg"
                            alt="Usuario"
                            class="h-5 md:h-6 w-5 md:w-6 object-cover rounded-full"
                        />

                    </button>

                    <div
                        id="userMenuDropdown"
                        class="hidden absolute right-0 top-full mt-3 w-56 rounded-2xl border border-white/10 bg-[rgba(17,24,39,0.92)] p-3 shadow-xl">

                        <p class="px-3 py-2 text-sm text-white/80">
                            Mi cuenta
                        </p>

                        <a
                            href="../account/myProfile.html"
                            class="block rounded-xl px-3 py-3 text-xs uppercase tracking-widest text-white/90 hover:bg-white/10">
                            Ver perfil
                        </a>

                        <button
                            id="userMenuLogoutButton"
                            class="mt-2 w-full rounded-xl px-3 py-3 text-left text-xs uppercase tracking-widest text-white/90 hover:bg-white/10">
                            Cerrar sesión
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </nav>

</header>
`;
export const navbarTemplateAbsolute = () => `
<header class="absolute w-full top-0 z-50 backdrop-blur-sm">

    <nav class="mx-auto max-w-7xl px-4 md:px-8 py-3 md:py-4">

        <div class="grid grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-6">

            <!-- Menú -->
            <div class="relative">

                <button
                    id="menuBtn"
                    class="h-11 px-5 rounded-full border border-white/15 bg-white/5 text-white flex items-center gap-2 hover:bg-white/10">

                    <img
                        src="../../assets/icons/menu.svg"
                        alt="Arte & Estilo"
                        class="w-5 h-5 md:w-6 md:h-6"
                    >

                    <span class="hidden md:block text-xs uppercase tracking-[0.28em]">
                        Menú
                    </span>

                </button>

                <ul
                    id="menu"
                    class="absolute top-full left-0 mt-3 w-64 flex flex-col gap-4 p-5 rounded-2xl border border-white/10 bg-[rgba(17,24,39,0.92)] text-xs uppercase tracking-[0.28em] text-white opacity-0 scale-95 pointer-events-none transition-all duration-300">

                    <li><a href="../../pages/home/home.html">Inicio</a></li>
                    <li><a href="../../pages/collections/collections.html">Colecciones</a></li>
                    <li><a href="../../pages/essence/essence.html">Nuestra Esencia</a></li>
                    <li><a href="../../pages/contact/contact.html">Contacto</a></li>

                </ul>

            </div>

            <!-- Logo -->
            <div class="flex justify-center min-w-0">

                <a href="../../pages/home/home.html" class="w-[230px] md:w-[450px]">
                    <img
                        src="../../assets/logos/A&E_Logo.svg"
                        alt="Arte & Estilo"
                        class="w-full"
                    >
                </a>

            </div>

            <!-- Acciones -->
            <div class="flex items-center gap-3 md:gap-4">

                <a
                    href="../account/myProfile.html"
                    class="flex h-9 md:h-11 w-9 md:w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10">

                    <img
                        src="../../assets/icons/shopping_cart.svg"
                        alt="Carrito"
                        class="h-5 md:h-6 w-5 md:w-6 object-cover rounded-full"
                    />

                </a>

                <div class="relative">

                    <button
                        id="userMenuButton"
                        class="flex h-9 md:h-11 w-9 md:w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10">

                        <img
                            src="../../assets/icons/account_icon.svg"
                            alt="Usuario"
                            class="h-5 md:h-6 w-5 md:w-6 object-cover rounded-full"
                        />

                    </button>

                    <div
                        id="userMenuDropdown"
                        class="hidden absolute right-0 top-full mt-3 w-56 rounded-2xl border border-white/10 bg-[rgba(17,24,39,0.92)] p-3 shadow-xl">

                        <p class="px-3 py-2 text-sm text-white/80">
                            Mi cuenta
                        </p>

                        <a
                            href="../account/myProfile.html"
                            class="block rounded-xl px-3 py-3 text-xs uppercase tracking-widest text-white/90 hover:bg-white/10">
                            Ver perfil
                        </a>

                        <button
                            id="userMenuLogoutButton"
                            class="mt-2 w-full rounded-xl px-3 py-3 text-left text-xs uppercase tracking-widest text-white/90 hover:bg-white/10">
                            Cerrar sesión
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </nav>

</header>
`;