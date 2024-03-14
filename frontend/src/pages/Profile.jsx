import { useParams } from "react-router-dom"
export default function Profile() {
    const params = useParams()
    console.log(params);
    return (
        <div>Profile {params.id}</div>
    )
}