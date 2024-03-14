import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

export default function Logout() {
    const { setUserCTX } = useContext(UserContext)
    const navigate = useNavigate()
    function logout() {
        localStorage.removeItem('userId')
        localStorage.removeItem('token')
        navigate('/')
        setUserCTX({})
    }

    return (
        <div
            className=" bg-slate-50 text-green-600 p-2 rounded cursor-pointer"
            onClick={logout}
        >Logout</div>
    )
}