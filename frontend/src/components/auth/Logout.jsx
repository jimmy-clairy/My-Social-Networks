import { useNavigate } from "react-router-dom"

export default function Logout() {
    const navigate = useNavigate()
    function logout() {
        localStorage.removeItem('userId')
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div
            className=" bg-slate-50 text-green-600 p-2 rounded cursor-pointer"
            onClick={logout}
        >Logout</div>
    )
}