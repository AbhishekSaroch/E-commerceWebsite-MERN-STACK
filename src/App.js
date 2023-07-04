import React from 'react'
import NavBar from "../src/components/common/NavBar"
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from "./pages/SignUp"
import Intro from './pages/Intro';
import { useSelector } from 'react-redux';
import Cart from './pages/Cart';
const App = () => {
  const {token}=useSelector((state)=>state.auth)
  return (
    <div className='w-full h-full flex flex-col '>
      <div>
      <NavBar />
      <Routes>     
  
          {token==null && <Route path="/" element={<Intro />}/>}
          {token!=null && <Route path="/home" element={<Home />}/>}
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App