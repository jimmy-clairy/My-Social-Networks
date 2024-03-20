import { setLocaleStorage } from "../utils/localeStorage";
import { LOGIN_URL, SIGNUP_URL } from "./API_URL";
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
        setLocaleStorage('userId', data.userId)
        setLocaleStorage('token', data.token)

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