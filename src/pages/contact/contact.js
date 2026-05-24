import { initNavbar } from "../../components/navbar/navbar.js";
import { helplines } from "../../controllers/contact/contactController.js";
import { FAQ } from "../../controllers/contact/contactController.js";
import { footerContact } from "../../components/footer/footerContact.js";

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    helplines();
    FAQ();
    footerContact();
});