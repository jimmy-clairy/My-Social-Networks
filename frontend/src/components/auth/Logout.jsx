import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../../context/Context"
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function Logout() {
    const { setUserCTX } = useContext(Context)
    const navigate = useNavigate()
    function logout() {
        localStorage.removeItem('userId')
        localStorage.removeItem('token')
        setUserCTX({})
        navigate('/')
    }

    return (
        <div
            className=" flex items-center bg-slate-50 text-green-600 p-2 rounded cursor-pointer"
            onClick={logout}
        >
            Logout
            <RiLogoutBoxRLine className=" ml-2" />
        </div>
    )
}