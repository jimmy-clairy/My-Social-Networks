import { useState } from "react";
import SignUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";

export default function Auth() {
    const [state, setState] = useState(false)
    function handleClick() {
        setState(!state)
    }

    return (
        <div className="mt-8 mx-auto max-w-lg p-8  bg-slate-700 rounded">
            <h2 className="text-2xl text-center">Authentification</h2>
            <button
                onClick={handleClick}
                className=" bg-slate-900 p-2 rounded">
                {state ? 'Se connecter' : 'S\'enregistrer'}
            </button>
            {state ? <SignUp /> : <Login />}

        </div>
    )
}