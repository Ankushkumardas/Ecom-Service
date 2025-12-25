import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router'

const AdminSidebar = () => {
    const navigate = useNavigate();
    const handlelogout = () => {
        setTimeout(() => {
            navigate('/')
        }, 1000);
    }
    return (
        <div>
            <div>
                <Link to={'/admin'}>Home</Link>
            </div>
            <nav className=' flex-col flex  justify-between ' >
                <div className=' flex flex-col gap-2'>

                    <NavLink to={'/admin/users'} className={(isActive) => { isActive ? "text-blue-500" : "text-white" }}>Users</NavLink>
                    <NavLink to={'/admin/products'} className={(isActive) => { isActive ? "text-blue-500" : "text-white" }}>Products</NavLink>
                    <NavLink to={'/admin/orders'} className={(isActive) => { isActive ? "text-blue-500" : "text-white" }}>Orders</NavLink>
                    <NavLink to={'/admin/Shop'} className={(isActive) => { isActive ? "text-blue-500" : "text-white" }}>Shop</NavLink>
                </div>
                <div className=' '>
                    <button onClick={handlelogout}>Logout</button>
                </div>
            </nav>
        </div>
    )
}

export default AdminSidebar
