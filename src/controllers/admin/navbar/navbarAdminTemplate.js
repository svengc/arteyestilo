export const navbarAdminTemplate = () => `
<header class="sticky top-0 z-40 backdrop-blur-sm bg-[rgba(92,122,107,0.92)]">
        <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
                <p class="text-xs uppercase tracking-widest font-montserrat text-white/70">Panel admin</p>
                <h1 class="text-2xl font-cormorant text-white">Catálogo local</h1>
            </div>
            <div class="flex items-center gap-3">
                <a href="./src/pages/account/myProfile.html"
                    class="text-xs uppercase tracking-widest font-montserrat text-white/80 hover:text-white">Mi perfil</a>
                <a href="./src/pages/home/home.html"
                    class="text-xs uppercase tracking-widest font-montserrat text-white/80 hover:text-white">Ir a la tienda</a>
            </div>
        </nav>
    </header>
`