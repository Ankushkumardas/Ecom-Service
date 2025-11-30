import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const Adminlayout = () => {
    return (
        <div className=' container mx-auto'>
            {/* sidebar */}
            <Sidebar/>
            <div className=' min-h-screen flex items-center justify-center'>
                {/* header */}
                <Header/>
                <main>
                    Admin layout
                <Outlet/>
                </main>
            </div>
        </div>
    )
}

export default Adminlayout
