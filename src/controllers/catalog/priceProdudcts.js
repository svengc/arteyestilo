import { BDProducts } from "../../models/products.js";
import { getStorage, createStorage, STORAGE_KEYS } from "../../util/storage.js";

/**
 * Devuelve los productos. Prioriza Storage; si no existe, usa BDProducts (seed).
 */
export function getPriceProducts() {
    const stored = getStorage(STORAGE_KEYS.PRODUCTS);
    if (stored && stored.length > 0) {
        return stored;
    }
    // Primera vez: sembrar el storage con los datos base
    createStorage(STORAGE_KEYS.PRODUCTS, BDProducts);
    return BDProducts;
}

/**
 * Persiste un array completo de productos en Storage.
 */
export function saveProducts(products) {
    createStorage(STORAGE_KEYS.PRODUCTS, products);
}

/**
 * Actualiza un producto por ID y guarda. Devuelve el array actualizado.
 */
export function updateProductById(id, changes) {
    const products = getPriceProducts();
    const updated = products.map(p => p.id === id ? { ...p, ...changes } : p);
    saveProducts(updated);
    return updated;
}

/**
 * Elimina un producto por ID y guarda. Devuelve el array actualizado.
 */
export function deleteProductById(id) {
    const products = getPriceProducts();
    const updated = products.filter(p => p.id !== id);
    saveProducts(updated);
    return updated;
}

/**
 * Restaura los productos al estado original (BDProducts).
 */
export function resetProducts() {
    createStorage(STORAGE_KEYS.PRODUCTS, BDProducts);
    return BDProducts;
}