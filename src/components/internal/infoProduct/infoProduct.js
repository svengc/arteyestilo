import { getPriceProducts } from "../../../controllers/catalog/priceProdudcts.js";
import { productImgandShop } from "./infoProductTempate.js";

export function productImgAndShop() {

    const container = document.querySelector(".productImgAndShop");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const products = getPriceProducts();

    const product = products.find(p => p.id === id);

    if (!product) {
        container.innerHTML = "<p>Producto no encontrado</p>";
        return;
    }

    container.innerHTML = productImgandShop(product);
}