import { initNavbar } from "../../components/navbar/navbar.js";
import { initInfoProductDiscount,secondInfoProductDiscount } from "../../components/internal/infoProductDiscount/infoProductDiscount.js";
import { initfooterInfoProductCard } from "../../controllers/infoCardProducts/infoCardProductsController.js";

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initInfoProductDiscount();
    secondInfoProductDiscount();
    initfooterInfoProductCard();
});