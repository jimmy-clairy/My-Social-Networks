import { USER_URL } from "./API_URL";
import fetchData from "./fetchData";

/**
 * Retrieves user data based on user ID and token.
 * @param {string} userId - The ID of the user to retrieve data for.
 * @param {string} token - The authentication token.
 * @returns {Promise<object>} A promise resolving to the user data.
 * @throws {Error} Throws an error if user data retrieval fails.
 */
export const getUser = async (userId, token) => {

    const url = USER_URL + userId;

    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    };

    try {
        const data = await fetchData(url, options)

        return data
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur :', error)
        throw error;
    }
}


export const updateOneUser = async (userId, token, formData) => {

    const url = USER_URL + userId;

    const options = {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
    };

    try {
        const data = await fetchData(url, options)

        return data
    } catch (error) {
        console.error('Erreur lors de la modification de l\'utilisateur :', error)
        throw error;
    }
}