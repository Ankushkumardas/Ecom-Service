import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from './components/auth/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Adminlayout from './components/admin/Adminlayout'
import Dashboard from './pages/admin/Dashboard'
import Features from './pages/admin/Features'
import Orders from './pages/admin/Orders'
import Products from './pages/admin/Products'
import ShoppingLayout from './components/shopping/ShoppingLayout'
import Error from './Error'
import Home from './pages/shopping/Home'
import Listing from './pages/shopping/Listing'
import Checkout from './pages/shopping/checkout'
import Account from './pages/shopping/account'
import HomePage from './pages/Landing/Home'
import CheckAuth from './components/common/CheckAuth'
const App = () => {
  const isAuthenticated = false;
  const user = null;
  return (
    <div>
      {/* common components */}
      <Routes>
        {/* landng page */}
        <Route path='/' element={<HomePage />} />
        {/* auth routes */}
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout /></CheckAuth>} >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* admin routes*/}
        <Route path='/admin' element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><Adminlayout /></CheckAuth>}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='features' element={<Features />} />
          <Route path='orders' element={<Orders />} />
          <Route path='products' element={<Products />} />
        </Route>
        {/* shop routes */}
        <Route path='/shop' element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout /></CheckAuth>}>
          <Route path='home' element={<Home />} />
          <Route path='list' element={<Listing />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='account' element={<Account />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
