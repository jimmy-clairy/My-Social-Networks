import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import { Context } from "../context/Context";
import { deleteOneUser } from "../api/user.api";
import { getLocaleStorage } from "../utils/localeStorage";
import { getAllPosts } from "../api/post.api";

export default function DeleteProfile() {

    const { userCTX, setUserCTX, setPostsCTX } = useContext(Context)
    const userId = userCTX._id

    const token = getLocaleStorage('token')

    const navigate = useNavigate()

    async function handleDeleteProfile() {
        try {

            await deleteOneUser(userId, token)

            localStorage.removeItem('userId')
            localStorage.removeItem('token')

            setUserCTX({})
            setPostsCTX(await getAllPosts())

            navigate('/')


        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div
            className=" flex items-center bg-red-500 w-max py-1 px-3 mt-2 rounded cursor-pointer"
            onClick={handleDeleteProfile}
        >
            <BsTrash3 className=" cursor-pointer mr-2" />
            <p>Delete User</p>
        </div>
    )
}