import { initNavbar } from "../../components/navbar/navbar.js";
import { cardEssence } from "../../components/cards/cardEssence/cardEssence.js";
import { footerEssence } from "../../components/footer/footerEssence.js";

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    cardEssence();
    footerEssence();
});