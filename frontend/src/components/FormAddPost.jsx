import { useContext, useRef, useState } from "react";
import { Context } from "../context/Context";
import { createOnePost, getAllPosts } from "../api/post.api";

export default function FormAddPost() {
    const [file, setFile] = useState(null)
    const [message, setMessage] = useState('')
    const { setPostsCTX } = useContext(Context)
    const formRef = useRef(null)

    const token = JSON.parse(localStorage.getItem('token'))

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('message', message);

            await createOnePost(token, formData)

            const data = await getAllPosts()
            setPostsCTX(data)

            formRef.current.reset()
            setMessage('')
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <form ref={formRef}
            className=" flex flex-col gap-4 mt-4 mx-auto max-w-2xl p-2 text-xl bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded"
            onSubmit={handleSubmit}
        >
            <p>Form Add Post</p>
            <div>
                <label htmlFor="file"></label>
                <input
                    className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="file"
                    id="file"
                    name="file"
                    accept=".jpg, .jpeg, .png, .webp"
                    onChange={(e) => setFile(e.target.files[0])} />
            </div>


            <div className="mb-5">
                <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Send files to this message:
                </label>
                <input
                    type="message"
                    name="message"
                    id="message"
                    className="w-full rounded border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
            </div>
            <input className=" bg-slate-600 rounded p-1 cursor-pointer" type="submit" value={'Envoyer'} />

        </form>
    )
}