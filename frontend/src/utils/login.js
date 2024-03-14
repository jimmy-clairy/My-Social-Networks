import fetchData from "./fetchData";

/**
 * Function to perform a login request to a remote server.
 *
 * @param {Object} user - The user information to use for login.
 * @param {string} user.email - The user's email address.
 * @param {string} user.password - The user's password.
 * @param {string} url - The URL of the API to make the login request to.
 * @returns {Promise<Object>} A promise resolved with the login data or an error.
 */
export default async function login(user, url) {
    // Request options
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    try {
        const data = await fetchData(url, options);

        // Store the login information in local storage
        localStorage.setItem('userId', JSON.stringify(data.userId));
        localStorage.setItem('token', JSON.stringify(data.token));

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}