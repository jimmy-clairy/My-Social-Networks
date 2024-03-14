import { useEffect } from "react"
import { GET_POST_URL, GET_USER_URL } from "../utils/API_URL";
import fetchData from "../utils/fetchData";

export default function Home() {
    const token = JSON.parse(localStorage.getItem('token'))
    const userId = JSON.parse(localStorage.getItem('userId'))

    async function getUser() {
        const url = GET_USER_URL + userId;
        const options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
        };

        const data = await fetchData(url, options)
        console.log(data);
    }

    async function getPost() {
        const url = GET_POST_URL;
        const options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        const data = await fetchData(url, options)
        console.log(data);
    }

    useEffect(() => {
        if (token && userId) {
            getUser()
            getPost()
        }
    }, [])

    return (
        <>
            {token && userId ?
                <div className="mt-4 mx-auto max-w-xl p-2 text-center text-2xl bg-green-400  rounded">Home</div> :
                <div className="mt-4 mx-auto max-w-xl p-2 text-center text-2xl bg-red-400  rounded">Home</div>}
        </>

    )
}