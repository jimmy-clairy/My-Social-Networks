import { useParams } from "react-router-dom"
export default function Profile() {
    const params = useParams()
    console.log(params);
    return (
        <div className="mt-4 mx-auto max-w-xl p-2 text-center text-2xl bg-violet-500 shadow-lg shadow-violet-500/50  rounded">Profile Id : {params.id}</div>
    )
}