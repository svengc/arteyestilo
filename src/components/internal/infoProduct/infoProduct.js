import { getPriceProducts } from "../../../controllers/catalog/priceProdudcts.js";
import { productImgandShop } from "./infoProductTemplate.js";

// export function initInfoProduct() {

    // document.addEventListener("DOMContentLoaded", () => {

    //     const params = new URLSearchParams(window.location.search);
    //     const id = params.get("id");

    //     const products = getPriceProducts();

    //     const product = products.find(p => p.id == id);

    //     if (!product) return;

    //     const container = document.querySelector(".productDetail");

    //     container.innerHTML = productImgandShop(product);

    //     console.log("ID:", id);
    //     console.log("PRODUCTS:", products);
    //     console.log("PRODUCT FOUND:", product);
    //     console.log("CONTAINER:", container);


    // });
    // document.addEventListener("DOMContentLoaded", () => {
    //     const params = new URLSearchParams(window.location.search);
    //     const id = params.get("id");
    
    //     const products = getPriceProducts();
    //     const product = products.find(p => p.id === id);
    
    //     const container = document.querySelector(".productDetail");
    
    //     if (!container) {
    //         console.error("No existe .productDetail en el HTML");
    //         return;
    //     }
    
    //     if (!product) {
    //         console.error("Producto no encontrado con id:", id);
    //         return;
    //     }
    
    //     if (!product.images) {
    //         console.error("El producto no tiene images:", product);
    //         return;
    //     }
    
    //     container.innerHTML = productImgandShop(product);
    // });
    
// }

export function initInfoProduct() {
    console.log("🔥 initInfoProduct cargó");

        const params = new URLSearchParams(window.location.search);
        const id = params.get("id") || "prod-bambu-natural";

    console.log("🧩 ID de la URL:", id);

    const products = getPriceProducts();
    console.log("📦 productos:", products);

    const product = products.find(p => p.id === id);

    console.log("🎯 producto encontrado:", product);

    const container = document.querySelector(".productDetail");
    console.log("📍 container:", container);

    if (!container) {
        console.error("❌ NO existe .productDetail en el HTML");
        return;
    }

    if (!product) {
        console.error("❌ NO se encontró el producto con ese ID");
        return;
    }

    container.innerHTML = productImgandShop(product);
}