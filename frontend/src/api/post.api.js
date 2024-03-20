import { POST_URL } from "./API_URL";
import fetchData from "./fetchData";

/**
 * Creates a new post.
 * @param {string} token - The authentication token.
 * @param {FormData} formData - The form data for the post to be created.
 * @returns {Promise<object>} A promise resolving to the data of the created post.
 * @throws {Error} Throws an error if creating the post fails.
 */
export async function createOnePost(token, formData) {
    console.log(token, formData);

    const options = {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
    };

    try {
        const data = await fetchData(POST_URL, options)

        return data
    } catch (error) {
        console.error('Erreur lors de la créeation d\'un post :', error);
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
        const data = await fetchData(POST_URL, options)

        return data
    } catch (error) {
        console.error('Erreur lors de la récupération de tous les articles :', error);
        throw error;
    }
}