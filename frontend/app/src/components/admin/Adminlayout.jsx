import { Menu } from 'lucide-react';
import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router';

const Adminlayout = () => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);
    const toggle = () => {
        setisSidebarOpen((prev) => !prev);
    }
    return (
        <div className='container'>
            <div className='min-h-screen flex flex-col md:flex-row relative'>

                {/* Mobile header */}
                <div className='flex md:hidden z-20 bg-gray-400 text-white p-2 gap-2'>
                    <button onClick={toggle}><Menu /></button>
                    <h2>Admin Dashboard</h2>
                </div>
                {/* overlay for sidebar mobile */}
                {isSidebarOpen && (
                    <div className='fixed inset-0 z-10  opacity-45 md:hidden' onClick={toggle}></div>
                )}

                {/* Sidebar for mobile */}
                <div className={`bg-black w-56 text-white p-2 min-h-screen absolute md:relative transform ${isSidebarOpen ? "translate-x-0 " : "-translate-x-full "} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
                    <AdminSidebar />
                </div>


                {/* Main content placeholder */}
                <div className="flex-1 p-4 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Adminlayout
