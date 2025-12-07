import React from 'react'
import { Link } from 'react-router'

const FeaturedCollection = () => {
    return (
        <div className=' container mx-auto'>
            <div className='max-w-7xl mx-auto'>
                <div className=' flex w-full items-center justify-center flex-col md:flex-row px-10'>
                    <div className='md:w-1/2 w-full bg-green-200 h-[600px] text-left p-8'>
                        <h2 className=' font-semibold tracking-tighter text-2xl'>Comfort and Style</h2>
                        <h2 className=' text-left tracking-tight text-3xl mt-4 font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe cupiditate, vitae illum perspiciatis inventore repudiandae commodi quae alias. Cumque, recusandae!</h2>
                        <Link to={'/collection/all'} className=''>Shop Now</Link>
                    </div>
                    <div className='md:w-1/2 w-full bg-black h-[600px] relative'>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpRl2qz3L28ahW5IV3OnQ5rLgJEQl2n3lnA&s"} alt="" className=' w-full h-full object-cover' />
                        <div className=' absolute left-0 bottom-0 '>
                            <p className='text-white'>sacasc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCollection
