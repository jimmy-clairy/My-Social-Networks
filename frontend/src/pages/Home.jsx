import { useContext, useEffect, useState } from "react"
import { Context } from "../context/index";
import { getUser, getAllPosts } from "../utils/fetchAPI";

export default function Home() {
    console.log('Home');
    const { setUserCTX } = useContext(Context)
    const [posts, setPosts] = useState([])

    const userId = JSON.parse(localStorage.getItem('userId'))
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        async function getInfo() {
            console.log(posts.length);

            if (userId && token) {
                setUserCTX(await getUser(userId, token))

                const data = await getAllPosts()
                setPosts(data.posts)
            }
        }
        getInfo()
    }, [])
    console.log(posts);
    return (
        <>
            {token && userId ?
                <div className="mt-4 mx-auto max-w-2xl p-2 text-center text-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded">Home</div> :
                <div className="mt-4 mx-auto max-w-2xl p-2 text-center text-2xl bg-green-500 shadow-lg shadow-green-500/50 rounded">Home</div>}

            {posts.map((post) => (
                <div key={post._id} className="mt-4 mx-auto max-w-2xl p-2 text-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded flex gap-2">
                    <img src={post.picture} alt="" width={240} />
                    <div>
                        <p>{post.posterPseudo}</p>
                        <p>{post.message}</p>
                    </div>
                </div>
            ))}
        </>
    )
}