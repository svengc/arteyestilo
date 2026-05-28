import { navbarAdminTemplate } from "./navbarAdminTemplate.js";

export function navbarAdmin() {

    const container = document.querySelector(".navbarAdmin");

    if (!container) return;

    container.innerHTML = navbarAdminTemplate()
    
}