import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import Cartdrawer from '../layout/Cartdrawer'
import { Menu } from 'lucide-react'

const Navbar = () => {
    const [cartopen, setcartopen] = useState(false);
    const [menu, setmenu] = useState(false);
    const togglemenu = () => {
        setmenu(!menu)
    }
    const handletoggle = () => {
        setcartopen(!cartopen)
    }
    return (
        <div className='container mx-auto'>
            <div className=' flex items-center justify-between gap-2 py-5 '>
                <div>
                    <Link to="/">{"Home"}</Link>
                </div>
                <div className=' hidden md:flex space-x-2 '>
                    <Link className=' uppercase font-semibold' to={'/collections/all'}>Men</Link>
                    <Link className=' uppercase font-semibold' to={'/collections/women'}>Women</Link>
                    <Link className=' uppercase font-semibold'>TopWear</Link>
                    <Link className=' uppercase font-semibold'>bottomwear</Link>
                </div>
                <div className=' flex gap-2 '>
                    <Searchbar />
                    <Link to={'/profile'}>Profile</Link>
                    <button className=' relative cursor-pointer z-50 ' onClick={handletoggle}> Cart
                        <span className=' absolute -top-4 px-2 py-1 -ml-2 rounded-full text-xs  bg-red-500 text-white'>2</span>
                    </button>
                    <button className='md:hidden ' onClick={togglemenu}><Menu /></button>
                </div>
            </div>
            <Cartdrawer handleToggle={handletoggle} cartopen={cartopen} />
            {/* mobile naviagtion ofr menu bar  */}
            <div className={`fixed shadow bg-white top-0 left-0 transition-transform duration-300 h-full w-1/2 z-50 ${menu ? "translate-x-0" : "-translate-x-full"}`}>
                <div className=' flex flex-col'>
                    <button onClick={() => setmenu(false)} className=' flex  justify-end'>Close</button>
                    <div className=' px-2'>
                        <p>Menu</p>
                        <div className=' flex flex-col gap-2 '>
                            <Link className=' uppercase font-semibold'>Men</Link>
                            <Link className=' uppercase font-semibold'>Women</Link>
                            <Link className=' uppercase font-semibold'>TopWear</Link>
                            <Link className=' uppercase font-semibold'>bottomwear</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
