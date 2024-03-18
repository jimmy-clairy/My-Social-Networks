import { Link, NavLink } from 'react-router-dom'
import userPicture from '/uploads/profil/random-user.png'
import Logout from './auth/Logout'
import { useContext } from 'react'
import { Context } from '../context'

export default function NavBar() {
    console.log('NavBar');
    const { userCTX } = useContext(Context)
    console.log(userCTX);
    return (
        <nav className=' bg-green-500 px-10 py-3'>
            <div className='mx-auto max-w-2xl flex gap-2 items-center justify-between'>
                <h2 className=' text-xl'>Bienvenue {userCTX.pseudo}</h2>
                <img className=' rounded object-cover w-10 h-10' src={userCTX.picture ? `${userCTX.picture}` : userPicture} alt="user-picture" />
                <Link className='btn' to='/'>Auth</Link>
                <Link className='btn' to='/home'>Home</Link>
                {userCTX.pseudo && <Link className='btn' to='/profile'>Profile</Link>}
                <Logout />
            </div>
        </nav>
    )
}