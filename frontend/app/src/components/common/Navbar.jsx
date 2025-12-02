import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import Cartdrawer from '../layout/Cartdrawer'

const Navbar = () => {
    const [cartopen, setcartopen] = useState(false);
    const handletoggle = () => {
        setcartopen(!cartopen)
    }
    return (
        <div className='container mx-auto'>
            <div className=' flex items-center justify-between gap-2 py-4'>
                <div>
                    <Link to="/">{"Home"}</Link>
                </div>
                <div className=' hidden md:flex space-x-2 '>
                    <Link className=' uppercase font-semibold'>Men</Link>
                    <Link className=' uppercase font-semibold'>Women</Link>
                    <Link className=' uppercase font-semibold'>TopWear</Link>
                    <Link className=' uppercase font-semibold'>bottomwear</Link>
                </div>
                <div className=' flex gap-2 '>
                    <Searchbar/>
                    <Link to={'/profile'}>Profile</Link>
                    <button className=' relative cursor-pointer z-50' onClick={handletoggle}> Cart
                        <span className=' absolute -top-2 px-2 py-1 rounded-full text-xs  bg-red-500 text-white'>2</span>
                    </button>
                </div>
            </div>
            <Cartdrawer handleToggle={handletoggle} cartopen={cartopen}/>
        </div>
    )
}

export default Navbar
