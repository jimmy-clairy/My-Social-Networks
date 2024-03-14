import { useContext, useEffect } from "react"
import { UserContext } from "../context/UserContext";
import { getUser, getAllPosts } from "../utils/fetchAPI";


export default function Home() {
    console.log('Home');
    const { setUserCTX } = useContext(UserContext)

    const userId = JSON.parse(localStorage.getItem('userId'))
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        async function getInfo(params) {
            if (userId && token) {
                setUserCTX(await getUser(userId, token))
                await getAllPosts()
            }
        }

        getInfo()
    }, [userId])

    return (
        <>
            {token && userId ?
                <div className="mt-4 mx-auto max-w-xl p-2 text-center text-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50  rounded">Home</div> :
                <div className="mt-4 mx-auto max-w-xl p-2 text-center text-2xl bg-green-500 shadow-lg shadow-green-500/50  rounded">Home</div>}
        </>

    )
}