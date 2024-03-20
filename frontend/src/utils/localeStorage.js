/**
 * Retrieves data from the local storage based on the provided item.
 * @param {string} item - The key for the item to retrieve from local storage.
 * @returns {any} The data stored in local storage corresponding to the provided item.
 */
export const getLocaleStorage = (item) => {
    return JSON.parse(localStorage.getItem(item));
}

/**
 * Stores data in the local storage.
 * @param {string} item - The key under which to store the data in local storage.
 * @param {any} data - The data to be stored in local storage.
 */
export const setLocaleStorage = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
}
