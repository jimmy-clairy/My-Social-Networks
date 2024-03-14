import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Profile from './pages/Profile'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='*' element={<Auth />} />
            </Routes>
        </BrowserRouter>
    )
}