import { Link, NavLink } from 'react-router-dom'
import Logout from './auth/Logout'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function NavBar() {
    console.log('NavBar');
    const { userCTX } = useContext(UserContext)
    console.log(userCTX);
    return (
        <nav className=' bg-green-500 px-10 py-2'>
            <div className='mx-auto max-w-lg flex gap-5 items-center justify-end'>
                <h2 >Bienvenue {userCTX.pseudo}</h2>
                <img className=' rounded' src={`./uploads/${userCTX.picture}`} alt="user-picture" height={50} width={50} />
                <Link className='btn' to='/'>Auth</Link>
                <Link className='btn' to='/home'>Home</Link>
                <Logout />
            </div>
        </nav>
    )
}