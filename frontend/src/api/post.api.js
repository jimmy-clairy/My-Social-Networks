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
        console.error('Erreur lors de la création d\'un post :', error);
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

/**
 * Deletes a post by its ID.
 * @param {string} postId - The ID of the post to delete.
 * @param {string} token - The authorization token.
 * @returns {Promise<any>} A promise that resolves with the deleted post data.
 * @throws {Error} If an error occurs during the deletion process.
 */
export async function deleteOnePost(postId, token) {
    const url = POST_URL + postId
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    };

    try {
        const data = await fetchData(url, options)

        return data
    } catch (error) {
        console.error('Erreur lors de la suppression d\'un post:', error);
        throw error;
    }
}