import { navbarTemplateFix,navbarTemplateAbsolute } from "../navbar/navbar.template.js";
import { initMenu,initUserMenu, navbarEventChangePosition, navbarEventFix} from "../navbar/navbarEvent.js";

export function initNavbar() {
    const navbarContainer = document.querySelector(".navbar");

    if (!navbarContainer) return;

    navbarContainer.innerHTML = navbarTemplateFix();

    initMenu();
    initUserMenu();
    navbarEventFix();
}

export function initNavbarabs() {
    const navbarContainer = document.querySelector(".navbar");

    if (!navbarContainer) return;

    navbarContainer.innerHTML = navbarTemplateAbsolute();

    initMenu();
    initUserMenu();
    navbarEventChangePosition();
}
