

export function initMenu() {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    if (!menuBtn || !menu) return;

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("opacity-0");
        menu.classList.toggle("scale-95");
        menu.classList.toggle("pointer-events-none");
    });
}

export function initUserMenu() {
    const button = document.getElementById("userMenuButton");
    const dropdown = document.getElementById("userMenuDropdown");

    if (!button || !dropdown) return;

    button.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
        if (
            !button.contains(e.target) &&
            !dropdown.contains(e.target)
        ) {
            dropdown.classList.add("hidden");
        }
    });
}

export function navbarEventFix() {
    const bgFix = document.querySelector(".navbar header");

    if (!bgFix) return;

    bgFix.classList.add("bg-[rgba(92,122,107,0.9)]");
}

export function navbarEventChangePosition() {
    const changePosition = document.querySelector(".navbar header");

    if (!changePosition) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 0) {

            changePosition.classList.remove(
                "absolute",
                "bg-transparent"
            );

            changePosition.classList.add(
                "fixed",
                "bg-[rgba(92,122,107,0.5)]"
            );

        } else {

            changePosition.classList.remove(
                "fixed",
                "bg-[rgba(92,122,107,0.5)]"
            );

            changePosition.classList.add(
                "absolute",
                "bg-transparent"
            );
        }
    });
}
