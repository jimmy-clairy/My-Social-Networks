import { GET_POST_URL, GET_USER_URL, LOGIN_URL, SIGNUP_URL } from "./API_URL";
import fetchData from "./fetchData";

/**
 * Logs the user into the system.
 * @param {object} user - The user object containing login credentials.
 * @returns {Promise<object>} A promise resolving to the user data.
 * @throws {Error} Throws an error if login fails.
 */
export const login = async (user) => {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    try {
        const data = await fetchData(LOGIN_URL, options);

        // Store the login information in local storage
        localStorage.setItem('userId', JSON.stringify(data.userId));
        localStorage.setItem('token', JSON.stringify(data.token));

        return data;
    } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        throw error;
    }
}

/**
 * Signs up a new user.
 * @param {object} user - The user object containing signup credentials.
 * @returns {Promise<object>} A promise resolving to the signup response.
 * @throws {Error} Throws an error if signup fails.
 */
export const signup = async (user) => {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    try {
        const data = await fetchData(SIGNUP_URL, options);

        return data;
    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        throw error;
    }
}

/**
 * Retrieves user data based on user ID and token.
 * @param {string} userId - The ID of the user to retrieve data for.
 * @param {string} token - The authentication token.
 * @returns {Promise<object>} A promise resolving to the user data.
 * @throws {Error} Throws an error if user data retrieval fails.
 */
export const getUser = async (userId, token) => {

    const url = GET_USER_URL + userId;

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

/**
 * Retrieves all posts.
 * @returns {Promise<object>} A promise resolving to the post data.
 * @throws {Error} Throws an error if post retrieval fails.
 */
export async function getAllPosts() {

    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    try {
        const data = await fetchData(GET_POST_URL, options)

        return data
    } catch (error) {
        console.error('Erreur lors de la récupération de tous les articles :', error);
        throw error;
    }
}