import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const ShoppingLayout = () => {
  return (
     <div className=' container mx-auto'>
            {/* sidebar */}
            <Sidebar/>
            <div className=' min-h-screen flex items-center justify-center'>
                {/* header */}
                <main>
                    shopping layout
                <Outlet/>
                </main>
            </div>
        </div>
  )
}

export default ShoppingLayout
