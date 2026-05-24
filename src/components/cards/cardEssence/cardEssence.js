import { getInfoCards } from "../../../controllers/essence/essenceController.js";
import { cardEssenceTemplate } from "./cardEssenceTemplate.js";

export function cardEssence() {

    const container = document.querySelector(".cardEssence");

    if (!container) return;

    const infoCardEssence = getInfoCards();

    container.innerHTML = infoCardEssence
        .map((essence, index) => cardEssenceTemplate(essence, index))
        .join("");
}