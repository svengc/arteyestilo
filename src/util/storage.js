export function getStorage(key, fallback = null) {
    try {
        const rawValue = localStorage.getItem(key);

        if (rawValue === null) {
            return fallback;
        }

        return JSON.parse(rawValue);
    } catch (error) {
        console.error(`No fue posible leer la llave "${key}" del storage.`, error);
        return fallback;
    }
}

export function createStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
}

export function clearStorage(key) {
    localStorage.removeItem(key);
}

export function updateStorage(key, updater, fallback = null) {
    const currentValue = getStorage(key, fallback);
    const nextValue = updater(currentValue);
    createStorage(key, nextValue);
    return nextValue;
}
