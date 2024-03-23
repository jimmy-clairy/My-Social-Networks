import { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../context/Context"
import randomPicture from '/uploads/profil/random-user.png'
import { updateOneUser } from "../api/user.api"
import { getLocaleStorage } from "../utils/localeStorage"
import DeleteProfile from "../components/DeleteProfile"

export default function Profile() {
    const { userCTX, setUserCTX } = useContext(Context)

    const token = getLocaleStorage('token')
    const [file, setFile] = useState(null)
    const [picture, setPicture] = useState(null)
    const [bio, setBio] = useState(userCTX.bio)
    const [once, setOnce] = useState(true)
    const formRef = useRef(null)

    // console.log('profile');
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('bio', bio);
            const data = await updateOneUser(userCTX._id, token, formData)

            setUserCTX(data);
            setOnce(false);
            setFile(null);
            formRef.current.reset()

        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }

    const handlePictureChange = (e) => {
        const file = e.target.files[0]
        setFile(file)
        const pictureUrl = URL.createObjectURL(file);
        setPicture(pictureUrl)
    }

    useEffect(() => {
        setBio(userCTX.bio)
        if (once) {
            setPicture(userCTX.picture)
        }
    }, [userCTX])

    const isSaveButtonDisabled = (file === null && bio === userCTX.bio);

    return (
        <>
            <div className="mt-4 mx-auto max-w-2xl p-2 text-center text-2xl bg-violet-500 shadow-lg shadow-violet-500/50  rounded">
                Profile de {userCTX.pseudo}
            </div>

            <div className="mt-4 mx-auto max-w-2xl p-2 bg-violet-500 shadow-lg shadow-violet-500/50 rounded flex gap-2">

                <img
                    className="rounded"
                    src={userCTX?.picture ? picture : randomPicture}
                    alt="picture-profile"
                    width={200}
                />

                <div className=" flex flex-1 flex-col justify-between">
                    <p className="text-lg">Email: {userCTX.email}</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <textarea
                            onChange={(e) => setBio(e.target.value)}
                            placeholder="Biographie"
                            value={bio}
                            className="w-full text-lg py-1 mt-2 mb-2 rounded bg-transparent cursor-pointer resize-none outline-none focus:bg-violet-600"
                            spellCheck="false"
                        />
                        <div className=" flex justify-between">
                            <input
                                className=" py-1"
                                type="file"
                                name="file"
                                accept=".jpg, .jpeg, .png, .webp"
                                onChange={handlePictureChange}
                            />

                            <input
                                className={`${isSaveButtonDisabled && 'hidden'} bg-purple-900 py-1 px-2 rounded cursor-pointer`}
                                type="submit"
                                value="Enregistrer"
                                disabled={isSaveButtonDisabled}
                            />
                        </div>
                    </form>
                    <DeleteProfile />
                </div>
            </div>
        </>
    )
}