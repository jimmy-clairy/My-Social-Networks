import { useParams } from "react-router-dom"
export default function Profile() {
    const params = useParams()
    console.log(params);
    return (
        <div className="mt-4 mx-auto p-2 text-center text-2xl bg-blue-300 max-w-xl rounded">Profile {params.id}</div>
    )
}