import { useContext, useEffect, useState } from "react"
import { Context } from "../context/Context";
import Card from "../components/Card";
import FormAddPost from "../components/FormAddPost";
import { getUser } from "../api/user.api";
import { getAllPosts } from "../api/post.api";

export default function Home() {
    const { setUserCTX, postsCTX, setPostsCTX } = useContext(Context)

    const userId = JSON.parse(localStorage.getItem('userId'))
    const token = JSON.parse(localStorage.getItem('token'))

    useEffect(() => {
        async function getInfo() {
            if (userId && token) {
                setUserCTX(await getUser(userId, token))
                setPostsCTX(await getAllPosts())
            }
        }
        getInfo()
    }, [])

    return (
        <>
            {token && userId ?
                <div className="mt-4 mx-auto max-w-2xl p-2 text-center text-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded">Home</div> :
                <div className="mt-4 mx-auto max-w-2xl p-2 text-center text-2xl bg-green-500 shadow-lg shadow-green-500/50 rounded">Home</div>}

            <FormAddPost />

            {postsCTX.map((post) => <Card key={post._id} post={post} />)}
        </>
    )
}