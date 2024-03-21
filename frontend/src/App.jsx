import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'
import { useContext, useEffect } from 'react'
import { Context } from './context/Context'
import { getUser } from './api/user.api'
import { getLocaleStorage } from './utils/localeStorage'
import { getAllPosts } from './api/post.api'

export default function App() {
    const { setUserCTX, setPostsCTX } = useContext(Context)

    const userId = getLocaleStorage('userId')
    const token = getLocaleStorage('token')

    useEffect(() => {

        async function saveInfo() {
            if (userId && token) {
                // Save in Context
                setUserCTX(await getUser(userId, token))
                setPostsCTX(await getAllPosts())
            }
        }
        saveInfo()

    }, [userId, token])

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<Auth />} />
            </Routes>
        </BrowserRouter>
    )
}