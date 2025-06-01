export const lruCache = <K extends string, V>(
    cache: Record<K, V>,
    history: K[],
    key: K,
    value: V,
    maxSize: number,
): {updatedCache: Record<K, V>, updatedHistory: K[]} => {
    const newCache = {...cache};
    const newHistory = [...history];

    const existIndex = newHistory.indexOf(key);
    if (existIndex !== -1) {
        newHistory.splice(existIndex, 1);
    }

    newHistory.push(key);
    newCache[key] = value;

    if (newHistory.length > maxSize) {
        const oldKey = newHistory.shift();
        if (oldKey) {
            delete newCache[oldKey];
        }
    }

    return {
        updatedCache: newCache,
        updatedHistory: newHistory
    };
}