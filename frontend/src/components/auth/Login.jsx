import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../api/auth.api"


export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    async function handleSubmite(e) {
        e.preventDefault()
        try {
            const user = { email, password }

            await login(user)

            navigate('/home')
        } catch (err) {
            setError(err.error)
            console.error(err);
        }
    }

    return (
        <form className="mt-4 grid gap-4 max-w-xs mx-auto" onSubmit={handleSubmite}>
            <h2>Login</h2>

            <div>
                <label htmlFor="email"></label>
                <input
                    className="rounded w-full p-2 text-gray-700"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value), setError('') }}
                    placeholder="Email"
                    autoComplete="email"
                    required
                />
            </div>

            <div>
                <label htmlFor="password"></label>
                <input
                    className="rounded w-full p-2 text-gray-700"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value), setError('') }}
                    placeholder="Password"
                    autoComplete="current-password"
                    minLength={6}
                    required
                />
                <div className="error-message">{error}</div>
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