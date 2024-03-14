import { Link, NavLink } from 'react-router-dom'
import Logout from './auth/Logout'

export default function NavBar() {
    return (
        <nav className=' bg-green-500 px-10 py-2'>
            <div className='mx-auto max-w-lg flex gap-5 items-center justify-end'>
                <Link className='btn' to='/'>Auth</Link>
                <Link className='btn' to='/home'>Home</Link>
                <Logout />
            </div>
        </nav>
    )
}