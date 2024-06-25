import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from "react-hot-toast"

// Components 
import Header from './components/Header'
import Footer from './components/Footer'

import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'


//pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Course from './pages/Course'
import Doubt from './pages/Doubt'
import { useAuth } from './context/AuthProvider'


function App() {

  const [authUser, setAuthUser] = useAuth();
  setAuthUser(authUser)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/course"} element={authUser ? <Course /> : <Navigate to={'/register'} />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/doubt"} element={<Doubt />} />
        <Route path={"/login"} element={!authUser ? <Login /> : <Navigate to={'/'} />} />
        <Route path={"/register"} element={!authUser ? <Registration /> : <Navigate to={'/'} />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  )
}

export default App
