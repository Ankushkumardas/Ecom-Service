import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'
import {Toaster} from'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
const App = () => {
  return (
    <div>
      <Toaster position='top-right'/>
      <Routes>
        {/* user routes */}
        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Route>
        {/* admin routes */}
      </Routes>
    </div>
  )
}

export default App
