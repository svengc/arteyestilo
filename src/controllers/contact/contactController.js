import { contact } from "../../models/contact.js";

export function helplines() {

    const container = document.getElementById("helplines");

    if (!container) {
        return;
    }

    container.innerHTML = contact.map((category, index) => `
        <div class="w-full max-w-6xl mt-2 space-y-2">
                <div class="md:grid md:grid-cols-[160px_1fr_290px] md:gap-4 md:items-start">
                    <h3 class="text-xl md:text-2xl font-cormorant text_numeral_alt mb-1
                    my-0 md:my-auto">
                        ${category.Metodo}
                    </h3>
                    <p class="text-sm md:text-lg font-montserrat text-paragraph mb-1 md:mb-0">
                        ${category.Description}
                    </p>
                    <p class="text-sm md:text-lg font-montserrat text-paragraph">
                        <span class="font-semibold md:hidden">Horario: </span>
                        ${category.businessHours}
                    </p>
                </div>
                ${index !== contact.length - 1
                ? `<hr class="border-subrayado">`
                : ""}
            </div>
    `).join("");
}

export function FAQ() {

    window.addEventListener("click", (e) => {

        const button = e.target.closest(".faq-button");

        if (!button) return;

        const content = button.nextElementSibling;

        if (!content) return;

        content.classList.toggle("hidden");
    });
}