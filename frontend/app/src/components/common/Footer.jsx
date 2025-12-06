import React from 'react'
import { Aperture, Cake, Facebook } from 'lucide-react';

const Footer = () => {
  const handlesubmit=()=>{

  }
  return (
    <div className=' container mx-auto '>
      <div className=' grid grid-cols-1 md:grid-cols-4 space-y-3 mt-20'>
        <div className='space-y-2'>
          <p>NewsLetter</p>
          <p className=' text-slate-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, officiis?
          </p>
          <p className=' text-slate-600'>Signup and get 10% off now!!</p>
          <form className='flex ' onSubmit={handlesubmit}>
            <input type="text" placeholder='Enter your email' className=' px-2 py-1 rounded-md border border-slate-300 '/>
            <button type='submit'className=' px-2 py-1 rounded-md  bg-black text-white'>Subscribe</button>
          </form>
        </div>
        <div>
          <p>Shop</p>
          <div>
            <p className='text-slate-500'>Men's Top Wear</p>
            <p className='text-slate-500'>Women's Top Wear</p>
            <p className='text-slate-500'>Men's Bottom Wear</p>
            <p className='text-slate-500'>Women's Bottom Wear</p>
          </div>
        </div>
        <div>
          <p>Support</p>
          <div>
            <p className='text-slate-500'>Contact Us</p>
            <p className='text-slate-500'>About Us</p>
            <p className='text-slate-500'>FAQ's</p>
            <p className='text-slate-500'>Features</p>
          </div>
        </div>
        <div>
          <p>Follow Us</p>
          <div className=' flex items-center gap-2'>
            <Facebook size={18}/>
            <Cake/>
            <Aperture size={18}/>
          </div>
          <div>
            <p>Call Us</p>
            <p className='text-slate-500'>+9374738282</p>
          </div>
        </div>
      </div>
      <div className=' flex items-center justify-center'>
        <p className=' text-slate-400'>Copywrite</p>
      </div>
    </div>
  )
}

export default Footer
