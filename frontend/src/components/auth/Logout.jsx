import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../../context/Context"

export default function Logout() {
    const { setUserCTX } = useContext(Context)
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