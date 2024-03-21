import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { BsTrash3, BsHeart, BsHeartFill } from "react-icons/bs";

export default function Card({ post, deletePost }) {
    const { userCTX } = useContext(Context)
    const [like, setLike] = useState(true)

    function likeOrUnlike() {
        setLike(!like)
    }

    return (
        <div className="mt-4 mx-auto max-w-2xl p-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded flex gap-2">
            <img className="rounded" src={post.picture} alt="post-picture" width={220} />
            <div className="flex flex-col flex-1 justify-between">
                <div>
                    <p className="text-xl">{post.posterPseudo}</p>
                    <p>{post.message}</p>
                </div>
                <div className="flex justify-between text-xl">
                    {like ?
                        <BsHeart onClick={likeOrUnlike} className="cursor-pointer" /> :
                        <BsHeartFill onClick={likeOrUnlike} className="cursor-pointer" />
                    }

                    {(userCTX.ifAdmin || userCTX._id === post.posterId) && <BsTrash3 onClick={() => deletePost(post._id)} className="cursor-pointer" />}
                </div>
            </div>
        </div>
    )
}