import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { login, signup } from "../../api/auth.api"
import { Context } from "../../context/Context"
import { getUser } from "../../api/user.api"
import { getAllPosts } from "../../api/post.api"

export default function SignUp() {
    const { setUserCTX, setPostsCTX } = useContext(Context)
    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerif, setPasswordVerif] = useState('')
    const [errorPasswordVerif, setErrorPasswordVerif] = useState('')
    const [errorPseudo, setErrorPseudo] = useState('')
    const [errorEmail, setErrorEmail] = useState('')

    const navigate = useNavigate()

    async function handleSubmite(e) {
        e.preventDefault()
        try {
            if (password !== passwordVerif) {
                return setErrorPasswordVerif(`Le mot de passe n'est pas identique`)
            }

            const user = { pseudo, email, password }

            await signup(user)

            const { userId, token } = await login(user)

            // Save in Context
            setUserCTX(await getUser(userId, token))
            setPostsCTX(await getAllPosts())

            navigate('/home')
        } catch (error) {
            console.error(error);
            const { pseudo, email } = error
            if (pseudo) {
                setErrorPseudo(pseudo)
            }
            if (email) {
                setErrorEmail(email)
            }
        }
    }

    return (
        <form className="mt-4 grid gap-4 max-w-xs mx-auto" onSubmit={handleSubmite}>
            <h2>SignUp</h2>
            <div>
                <label htmlFor="pseudo"></label>
                <input
                    className="rounded w-full p-2 text-gray-700"
                    id="pseudo"
                    type="text"
                    value={pseudo}
                    onChange={(e) => { setPseudo(e.target.value), setErrorPseudo('') }}
                    placeholder="Pseudo"
                    required
                />
                <div className="error-message">{errorPseudo}</div>
            </div>

            <div>
                <label htmlFor="email"></label>
                <input
                    className="rounded w-full p-2 text-gray-700"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value), setErrorEmail('') }}
                    placeholder="Email"
                    autoComplete="email"
                    required
                />
                <div className="error-message">{errorEmail}</div>
            </div>

            <div>
                <label htmlFor="password"></label>
                <input
                    className="rounded w-full p-2 text-gray-700"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value), setErrorPasswordVerif('') }}
                    placeholder="Password"
                    autoComplete="current-password"
                    minLength={6}
                    required
                />
                <div className="error-message"></div>
            </div>

            <div>
                <label htmlFor="password-verif"></label>
                <input
                    className="rounded w-full p-2 text-gray-700"
                    id="password-verif"
                    type="password"
                    value={passwordVerif}
                    onChange={(e) => { setPasswordVerif(e.target.value), setErrorPasswordVerif('') }}
                    placeholder="Password"
                    autoComplete="current-password"
                    minLength={6}
                    required
                />
                <div className="error-message">{errorPasswordVerif}</div>
            </div>

            <div>
                <input
                    className="rounded w-full p-2 bg-slate-900 cursor-pointer"
                    type="submit"
                    value='Envoyer'
                />
            </div>
        </form>

    )
}