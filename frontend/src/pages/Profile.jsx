import { useContext, useEffect, useState } from "react"
import { Context } from "../context/Context"
import userPicture from '/uploads/profil/random-user.png'
import { updateOneUser } from "../api/user.api"
import { getLocaleStorage } from "../utils/localeStorage"

export default function Profile() {
    const { userCTX, setUserCTX } = useContext(Context)
    const token = getLocaleStorage('token')
    const [file, setFile] = useState(null)
    const [bio, setBio] = useState(userCTX.bio)
    const [isImageUpdated, setIsImageUpdated] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('bio', bio);
            const data = await updateOneUser(userCTX._id, token, formData)

            setUserCTX(data);

            setIsImageUpdated(true);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }

    useEffect(() => {
        setBio(userCTX.bio)
    }, [userCTX])

    return (
        <>
            <div className="mt-4 mx-auto max-w-2xl p-2 text-center text-2xl bg-violet-500 shadow-lg shadow-violet-500/50  rounded">
                Profile de {userCTX.pseudo}
            </div>

            <div className="mt-4 mx-auto max-w-2xl p-2 bg-violet-500 shadow-lg shadow-violet-500/50 rounded flex gap-2">

                <img
                    className="rounded"
                    src={isImageUpdated ? URL.createObjectURL(file) : userCTX.picture ? userCTX.picture : userPicture}
                    alt="picture-profile"
                    width={200}
                />

                <div className=" flex flex-1 flex-col justify-between">
                    <p className="text-lg">Email: {userCTX.email}</p>
                    <textarea
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Biographie"
                        value={bio}
                        className="text-lg py-1 mt-2 mb-2 rounded bg-transparent cursor-pointer outline-none resize-none"
                    />
                    <form onSubmit={handleSubmit} className="flex justify-between">

                        <input
                            type="file"
                            name="file"
                            id="file"
                            accept=".jpg, .jpeg, .png, .webp"
                            onChange={(e) => setFile(e.target.files[0])}
                        />

                        <input
                            className=" bg-slate-700 py-1 px-2 rounded cursor-pointer"
                            type="submit"
                            value="Enregistrer"
                        />
                    </form>
                </div>
            </div>


        </>
    )
}