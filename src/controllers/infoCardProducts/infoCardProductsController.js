import { getPriceProducts } from "../../controllers/catalog/priceProdudcts.js";
import { footerInfoProductCard } from "../../components/footer/footerInfoProductCard.js";

export function initfooterInfoProductCard() {

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id") || "prod-bambu-natural";

    const products = getPriceProducts();

    const product = products.find(p => p.id === id);

    if (!product) {
        console.error("❌ NO se encontró el producto con ese ID");
        return;
    }

    footerInfoProductCard(product);
}