import { getPriceProducts, updateProductById, deleteProductById, saveProducts, resetProducts } from "../../../../controllers/catalog/priceProdudcts.js";
import { tableProductTemplate } from "./tableProducTemplate.js";

export function adminTableProductsDiscount() {
    const container = document.querySelector(".cardProd-admin");
    if (!container) return;

    render();

    function render() {
        const products = getPriceProducts().filter(p => p.discount);
        container.innerHTML = tableProductTemplate(products, true);
        activateEditMode();
        activateDeleteMode();
        activateResetBtn();
        activateAddModal();
        activateLightbox();
        activateImagePicker();
    }

    function activateEditMode() {
        container.querySelectorAll(".edit-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const row = btn.closest("[data-id]");
                row.querySelectorAll(".text-value").forEach(s => s.classList.add("hidden"));
                row.querySelectorAll(".edit-input").forEach(i => i.classList.remove("hidden"));
                btn.classList.add("hidden");
                row.querySelector(".save-btn").classList.remove("hidden");
            });
        });

        container.querySelectorAll(".save-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const row = btn.closest("[data-id]");
                const id = row.dataset.id;
                const spans = row.querySelectorAll(".text-value");
                const inputs = row.querySelectorAll(".edit-input");

                spans.forEach((span, i) => {
                    span.textContent = inputs[i].value;
                    span.classList.remove("hidden");
                });
                inputs.forEach(input => input.classList.add("hidden"));
                // Actualizar miniaturas con los nuevos URLs y restaurar vista normal
                const imgUrlInputs = row.querySelectorAll(".img-url-input");
                imgUrlInputs.forEach((urlInput, i) => {
                    const thumb = row.querySelectorAll(".img-thumb")[i];
                    if (thumb && urlInput.value) {
                        thumb.src = urlInput.value;
                        thumb.dataset.full = urlInput.value;
                    }
                });
                row.querySelector(".img-edit-mode")?.classList.add("hidden");
                row.querySelector(".img-thumbs")?.classList.remove("hidden");
                row.querySelector(".edit-btn").classList.remove("hidden");
                btn.classList.add("hidden");

                const fields = [...inputs];
                const newImages = [...row.querySelectorAll(".img-url-input")].map(i => i.value).filter(Boolean);
                updateProductById(id, {
                    name:           fields[0].value,
                    price:          Number(fields[1].value),
                    compareAtPrice: Number(fields[2].value),
                    category:       fields[3].value,
                    material:       fields[4].value,
                    style:          fields[5].value,
                    stock:          Number(fields[6].value),
                    ...(newImages.length ? { images: newImages } : {}),
                });
                showToast("✅ Producto guardado.");
            });
        });
    }

    function activateDeleteMode() {
        container.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const row = btn.closest("[data-id]");
                const id = row.dataset.id;
                if (!confirm(`¿Eliminar el producto "${id}"?`)) return;
                deleteProductById(id);
                showToast("🗑️ Producto eliminado.");
                render();
            });
        });
    }

    function activateResetBtn() {
        const btn = container.querySelector("#reset-products-btn");
        if (!btn) return;
        btn.addEventListener("click", () => {
            if (!confirm("¿Restaurar todos los productos al estado original?")) return;
            resetProducts();
            render();
            showToast("🔄 Productos restaurados.");
        });
    }

    function activateAddModal() {
        const openBtn  = container.querySelector("#add-product-btn");
        const modal    = container.querySelector("#add-product-modal");
        const closeBtn = container.querySelector("#close-modal-btn");
        const cancelBtn= container.querySelector("#cancel-modal-btn");
        const confirmBtn = container.querySelector("#confirm-add-btn");
        const errorDiv = container.querySelector("#modal-error");

        function openModal()  { modal.classList.remove("hidden"); errorDiv.classList.add("hidden"); }
        function closeModal() { modal.classList.add("hidden"); clearForm(); }

        function clearForm() {
            ["new-name","new-price","new-compareAtPrice","new-stock","new-material",
             "new-style","new-summary","new-description","new-idealFor","new-storage","new-image"]
            .forEach(id => { const el = container.querySelector(`#${id}`); if(el) el.value = ""; });
            const cat = container.querySelector("#new-category");
            if (cat) cat.value = "";
            const feat = container.querySelector("#new-featured");
            if (feat) feat.checked = false;
            const disc = container.querySelector("#new-discount");
            if (disc) disc.checked = true; // En la vista de descuento, marcar por defecto
        }

        openBtn?.addEventListener("click", openModal);
        closeBtn?.addEventListener("click", closeModal);
        cancelBtn?.addEventListener("click", closeModal);
        modal?.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

        confirmBtn?.addEventListener("click", () => {
            const name     = container.querySelector("#new-name")?.value.trim();
            const price    = Number(container.querySelector("#new-price")?.value);
            const category = container.querySelector("#new-category")?.value;

            if (!name || !price || !category) {
                errorDiv.textContent = "⚠️ Nombre, precio y categoría son obligatorios.";
                errorDiv.classList.remove("hidden");
                return;
            }

            const categoryLabels = {
                sala:       "Sala & Descanso",
                comedor:    "Comedor & Reunión",
                dormitorio: "Descanso & Intimidad",
                detalles:   "Detalles que Cuentan",
            };

            const imageUrl = container.querySelector("#new-image")?.value.trim()
                || "https://placehold.co/400x400?text=Sin+imagen";

            const newProduct = {
                id:             `prod-${name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g,"").slice(0,30)}-${Date.now()}`,
                name,
                price,
                compareAtPrice: Number(container.querySelector("#new-compareAtPrice")?.value) || price,
                category,
                categoryLabel:  categoryLabels[category] || category,
                summary:        container.querySelector("#new-summary")?.value.trim() || "",
                summaryDiscount:"",
                description:    container.querySelector("#new-description")?.value.trim() || "",
                material:       container.querySelector("#new-material")?.value.trim() || "N/A",
                style:          container.querySelector("#new-style")?.value.trim() || "N/A",
                storage:        container.querySelector("#new-storage")?.value.trim() || "No aplica",
                idealFor:       container.querySelector("#new-idealFor")?.value.trim() || "",
                guarantee:      "12 meses",
                featured:       container.querySelector("#new-featured")?.checked || false,
                discount:       container.querySelector("#new-discount")?.checked || false,
                stock:          Number(container.querySelector("#new-stock")?.value) || 0,
                images:         [imageUrl, imageUrl, imageUrl, imageUrl],
                footerImage:    imageUrl,
            };

            const all = getPriceProducts();
            saveProducts([...all, newProduct]);
            closeModal();
            render();
            showToast("🎉 Producto agregado correctamente.");
        });
    }


    function activateLightbox() {
        const lightbox = container.querySelector("#img-lightbox");
        const lbImg    = container.querySelector("#lightbox-img");
        const lbLabel  = container.querySelector("#lightbox-label");
        const lbClose  = container.querySelector("#lightbox-close");

        container.querySelectorAll(".img-thumb").forEach(thumb => {
            thumb.addEventListener("click", () => {
                lbImg.src = thumb.dataset.full;
                lbLabel.textContent = `Imagen ${Number(thumb.dataset.index) + 1} de 4`;
                lightbox.classList.remove("hidden");
            });
        });

        lbClose?.addEventListener("click",  () => lightbox.classList.add("hidden"));
        lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.classList.add("hidden"); });
    }

    function activateImagePicker() {
        const picker      = container.querySelector("#img-picker-modal");
        const pickerClose = container.querySelector("#picker-close");

        // Estado: qué slot se está editando
        let activeIndex = null;
        let activeRow   = null;

        // Abrir picker al hacer clic en el lápiz de cualquier imagen en modo edición
        container.addEventListener("click", (e) => {
            const pickBtn = e.target.closest(".img-pick-btn");
            if (!pickBtn) return;
            activeIndex = Number(pickBtn.dataset.imgIndex);
            activeRow   = pickBtn.closest("[data-id]");
            picker.classList.remove("hidden");
        });

        // Seleccionar imagen del picker
        picker?.addEventListener("click", (e) => {
            // Cerrar con fondo
            if (e.target === picker) { picker.classList.add("hidden"); return; }

            const option = e.target.closest(".picker-option");
            if (!option || activeRow === null) return;

            const newPath = option.dataset.path;

            // Actualizar miniatura del slot en modo edición
            const editThumb = activeRow.querySelectorAll(".img-edit-thumb")[activeIndex];
            if (editThumb) editThumb.src = newPath;

            // Actualizar input oculto
            const hiddenInput = activeRow.querySelectorAll(".img-url-input")[activeIndex];
            if (hiddenInput) hiddenInput.value = newPath;

            // Marcar la opción seleccionada visualmente
            picker.querySelectorAll(".picker-option img").forEach(img => {
                img.classList.remove("border-[#5C7A6B]", "border-4");
            });
            option.querySelector("img")?.classList.add("border-[#5C7A6B]", "border-4");

            picker.classList.add("hidden");
        });

        pickerClose?.addEventListener("click", () => picker.classList.add("hidden"));
    }

    function showToast(msg) {
        const toast = document.createElement("div");
        toast.textContent = msg;
        toast.className = "fixed bottom-6 right-6 bg-[#5C7A6B] text-white px-5 py-3 rounded-2xl shadow-lg z-50 transition-opacity duration-500";
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.opacity = "0"; setTimeout(() => toast.remove(), 500); }, 2500);
    }
}