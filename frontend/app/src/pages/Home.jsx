import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollectionSection from '../components/products/GenderCollectionSection'
import NewArrivals from '../components/products/NewArrivals'
import BestSeller from '../components/layout/BestSeller'
import ProductDetails from '../components/products/ProductDetails'
import YouMayLike from '../components/products/YouMayLike'

const Home = () => {
  return (
    <div> 
    <Hero/> 
    <GenderCollectionSection/>
    <NewArrivals/>
    <div className='my-10 mx-auto container'>
        <h2 className=' text-center text-2xl font-semibold tracking-tighter'>Best Seller</h2>
        <ProductDetails/>
    </div>
    <YouMayLike/>
    </div>
  )
}

export default Home
