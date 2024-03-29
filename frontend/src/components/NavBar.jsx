import { Link, NavLink } from 'react-router-dom'
import userPicture from '/uploads/profil/random-user.png'
import Logout from './auth/Logout'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'

export default function NavBar() {
    const { userCTX } = useContext(Context)
    const [imageKey, setImageKey] = useState(Date.now())

    useEffect(() => {
        setImageKey(Date.now())
    }, [userCTX])

    return (
        <nav className=' bg-green-500 px-10 py-3'>
            <div className='mx-auto max-w-2xl flex gap-2 items-center justify-between'>

                {userCTX.pseudo &&
                    <Link className='btn' to='/profile'>
                        <div className='flex items-center'>
                            <h2 className=' text-xl mr-4'>Bienvenue {userCTX.pseudo}</h2>
                            <img className=' rounded object-cover w-10 h-10' src={userCTX.picture ? `${userCTX.picture}?${imageKey}` : userPicture} alt="user-picture" />
                        </div>
                    </Link>}

                <Link className='btn' to='/'>Auth</Link>
                <Link className='btn' to='/home'>Home</Link>
                <Logout />
            </div>
        </nav>
    )
}