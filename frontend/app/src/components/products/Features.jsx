import { ShoppingCart, WalletCards, WavesArrowDown } from 'lucide-react'
import React from 'react'

const Features = () => {
    return (
        <div className=' container mx-auto my-20'>
            <h2 className='text-center tracking-tighter text-3xl font-semibold mb-10'>Features</h2>
            <div className='max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 px-10 mx-auto'>
                <div className=' flex flex-col items-center justify-center border border-slate-200 p-2 rounded-md shadow hover:shadow-md duration-200 hover:scale-105 transition-all'>
                    <ShoppingCart/>
                    <p className='text-center w-2/3 text-slate-500 mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.</p>
                </div>
               <div className=' flex flex-col items-center justify-center border border-slate-200 p-2 rounded-md shadow hover:shadow-md duration-200 hover:scale-105 transition-all'>
                    <ShoppingCart/>
                    <p className='text-center w-2/3 text-slate-500 mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.</p>
                </div>
              <div className=' flex flex-col items-center justify-center border border-slate-200 p-2 rounded-md shadow hover:shadow-md duration-200 hover:scale-105 transition-all'>
                    <ShoppingCart/>
                    <p className='text-center w-2/3 text-slate-500 mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.</p>
                </div>
            </div>
        </div>
    )
}

export default Features
