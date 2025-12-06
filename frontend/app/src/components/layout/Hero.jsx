import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
    return (
        <section className=' w-full flex items-center justify-center min-h-[500px]'>
            <div className=' text-center'>
            <p className=' tracking-tighter text-6xl font-semibold'>VACATION ON</p>
            <Link to="path">Shop Now</Link>
            </div>
        </section>
    )
}

export default Hero
