import { useContext } from "react";
import { Context } from "../context/Context";
import { BsTrash3, BsHeart } from "react-icons/bs";

export default function Card({ post, deletePost }) {
    const { userCTX } = useContext(Context)

    return (
        <div className="mt-4 mx-auto max-w-2xl p-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded flex gap-2">
            <img className="rounded" src={post.picture} alt="post-picture" width={220} />
            <div className="flex flex-col flex-1 justify-between">
                <div>
                    <p className="text-xl">{post.posterPseudo}</p>
                    <p>{post.message}</p>
                </div>
                <div className="flex justify-between text-xl">
                    <BsHeart className="cursor-pointer" />
                    {(userCTX.ifAdmin || userCTX._id === post.posterId) && <BsTrash3 onClick={() => deletePost(post._id)} className="cursor-pointer" />}
                </div>
            </div>
        </div>
    )
}