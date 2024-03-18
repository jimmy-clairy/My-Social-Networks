import { Link, NavLink } from 'react-router-dom'
import userPicture from '/uploads/profil/random-user.png'
import Logout from './auth/Logout'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function NavBar() {
    console.log('NavBar');
    const { userCTX } = useContext(UserContext)
    console.log(userCTX.picture);
    return (
        <nav className=' bg-green-500 px-10 py-3'>
            <div className='mx-auto max-w-xl flex gap-2 items-center justify-between'>
                <h2 className=' text-xl'>Bienvenue {userCTX.pseudo}</h2>
                <img className=' rounded object-cover w-10 h-10' src={userCTX.picture ? `${userCTX.picture}` : userPicture} alt="user-picture" />
                <Link className='btn' to='/'>Auth</Link>
                <Link className='btn' to='/home'>Home</Link>
                <Link className='btn' to='/profile'>Profile</Link>
                <Logout />
            </div>
        </nav>
    )
}