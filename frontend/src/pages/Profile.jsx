import { useContext } from "react"
import { Context } from "../context/Context"
import userPicture from '/uploads/profil/random-user.png'

export default function Profile() {
    const { userCTX } = useContext(Context)

    return (
        <>
            <div className="mt-4 mx-auto max-w-2xl p-2 text-center text-2xl bg-violet-500 shadow-lg shadow-violet-500/50  rounded">
                Profile de {userCTX.pseudo}
            </div>

            <div className="mt-4 mx-auto max-w-2xl p-2 text-center text-2xl bg-violet-500 shadow-lg shadow-violet-500/50 rounded flex gap-2">
                <img className="rounded" src={userCTX.picture ? `${userCTX.picture}` : userPicture} alt="picture-profile" width={240} />
                <p>Email: {userCTX.email}</p>
            </div>
        </>
    )
}