import { useContext } from "react"
import { Context } from "../context/Context";
import Card from "../components/Card";
import FormAddPost from "../components/FormAddPost";
import { deleteOnePost } from "../api/post.api";
import { getLocaleStorage } from "../utils/localeStorage";

export default function Home() {
    const { postsCTX, setPostsCTX } = useContext(Context)

    const userId = getLocaleStorage('userId')
    const token = getLocaleStorage('token')

    async function deletePost(id) {
        const postsFilter = postsCTX.filter((post) => post._id !== id)
        setPostsCTX(postsFilter)

        await deleteOnePost(id, token)
    }

    return (
        <>
            {token && userId ?
                <div className="mt-4 mx-auto max-w-2xl p-2 text-center text-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded">Home</div> :
                <div className="mt-4 mx-auto max-w-2xl p-2 text-center text-2xl bg-green-500 shadow-lg shadow-green-500/50 rounded">Home</div>}

            <FormAddPost />

            {postsCTX.map((post) => <Card key={post._id} post={post} deletePost={deletePost} />)}
        </>
    )
}