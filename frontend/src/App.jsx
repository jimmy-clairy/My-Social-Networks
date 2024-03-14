import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Profile from "./pages/Profile"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
