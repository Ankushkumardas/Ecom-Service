import React from 'react'
import CartContent from '../cart/CartContent'

const Cartdrawer = ({ handleToggle, cartopen }) => {
    const handlechange = () => {
        handleToggle()
    }
    return (
        <div className={`fixed top-0 right-0 w-1/2 sm:1/2 md:1/4 lg:w-1/4  h-full bg-slate-100 shadow transition-transform transform duration-200 flex flex-col z-90 ${cartopen ? "translate-x-0" : "translate-x-full"}`}>
            <button onClick={handlechange} className=' cursor-pointer flex justify-end p-2'>x</button>
            <div className='px-2 overflow-y-auto grow-1'>
                Cart Content
                <CartContent/>
            </div>
            <div className=' sticky bottom-0'>
                <button className=' w-full flex items-center justify-center bg-blue-500 text-white py-2 '>Checkout</button>
            </div>
        </div>
    )
}

export default Cartdrawer
