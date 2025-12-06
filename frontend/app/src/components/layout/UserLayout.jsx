import React from 'react'
import Footer from '../common/Footer'
import { Outlet } from 'react-router'
import Navbar from '../common/Navbar'

const UserLayout = () => {
  return (
    <div className=''>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout
