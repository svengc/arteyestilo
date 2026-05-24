import { getPriceProducts } from "../../../controllers/catalog/priceProdudcts.js";
import { productImgandShopDiscount, productDescriptionDiscount } from "./infoProductDiscountTemplate.js";

export function initInfoProductDiscount() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "prod-bambu-natural";

    const products = getPriceProducts();

    const product = products.find(p => p.id === id);

    const container = document.querySelector(".productDetailDiscount");

    if (!container) {
        console.error("❌ NO existe .productDetail en el HTML");
        return;
    }

    if (!product) {
        console.error("❌ NO se encontró el producto con ese ID");
        return;
    }

    container.innerHTML = productImgandShopDiscount(product);

}
export function secondInfoProductDiscount() {
    console.log("🔥 initInfoProduct cargó");

        const params = new URLSearchParams(window.location.search);
        const id = params.get("id") || "prod-bambu-natural";

    console.log("🧩 ID de la URL:", id);

    const products = getPriceProducts();
    console.log("📦 productos:", products);

    const product = products.find(p => p.id === id);

    console.log("🎯 producto encontrado:", product);

    const container = document.querySelector(".productDetailInfoDiscount");
    console.log("📍 container:", container);

    if (!container) {
        console.error("❌ NO existe .productDetail en el HTML");
        return;
    }

    if (!product) {
        console.error("❌ NO se encontró el producto con ese ID");
        return;
    }

    container.innerHTML = productDescriptionDiscount(product);
}
