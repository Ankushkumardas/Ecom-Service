import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/products/ProductDetails';
import Checkout from './components/cart/Checkout';
import OrderConfirmationPage from './components/products/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import Orders from './pages/Orders';
import Adminlayout from './components/admin/Adminlayout';
import AdminHomepage from './components/admin/AdminHomepage';
import UserManagment from './components/admin/UserManagment';
import AdminProductManagemnt from './components/admin/AdminProductManagemnt';
import EditProduct from './components/admin/EditProduct';
import AdminOrderManagemnt from './components/admin/AdminOrderManagemnt';
const App = () => {
  return (
    <div>
      <Toaster position='top-right' />
      <Routes>
        {/* user routes */}
        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
          <Route path='collections/:collection' element={<CollectionPage />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='order-confirmation' element={<OrderConfirmationPage />} />
          <Route path='order/:id' element={<OrderDetailsPage />} />
          <Route path='/my-orders' element={<Orders />} />

        </Route>
        {/* admin routes */}
        <Route path='/admin' element={<Adminlayout />}>
          <Route index element={<AdminHomepage/>} />
          <Route path='users' element={<UserManagment/>} />
          <Route path='products' element={<AdminProductManagemnt/>} />
          <Route path='products/:id/edit' element={<EditProduct/>} />
          <Route path='orders' element={<AdminOrderManagemnt/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
