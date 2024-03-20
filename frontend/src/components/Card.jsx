export default function Card({ post }) {
    return (
        <div className="mt-4 mx-auto max-w-2xl p-2 text-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded flex gap-2">
            <img className="rounded" src={post.picture} alt="" width={240} />
            <div>
                <p>{post.posterPseudo}</p>
                <p>{post.message}</p>
            </div>
        </div>
    )
}