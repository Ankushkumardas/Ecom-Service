import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollectionSection from '../components/products/GenderCollectionSection'
import NewArrivals from '../components/products/NewArrivals'
import BestSeller from '../components/layout/BestSeller'
import ProductDetails from '../components/products/ProductDetails'
import ProductGrid from '../components/products/ProductGrid'
import FeaturedCollection from '../components/products/FeaturedCollection'
import Features from '../components/products/Features'

const Home = () => {
  const products = [
    {
      _id: 3,
      name: "Leather Boots",
      price: 89,
      images: { url: "https://picsum.photos/200?random=25" }
    },
    {
      _id: 4,
      name: "Summer Dress",
      price: 45,
      images: { url: "https://picsum.photos/200?random=23" }
    },
    {
      _id: 5,
      name: "Wool Scarf",
      price: 19,
      images: { url: "https://picsum.photos/200?random=32" }
    },
    {
      _id: 6,
      name: "Sneakers",
      price: 49,
      images: { url: "https://picsum.photos/200?random=34" }
    }
  ]
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/*  */}
      <div className='my-10 mx-auto container'>
        <h2 className=' text-center text-2xl font-semibold tracking-tighter'>Best Seller</h2>
        <ProductDetails />
      </div>
      {/*  */}
      <div className='my-10 mx-auto container'>
        <h2 className=' text-center text-2xl font-semibold tracking-tighter'>Top Women's Wear</h2>
        <ProductGrid products={products} />
      </div>
      {/*  */}
      <FeaturedCollection />
      {/*  */}
      <div>
        <Features />
      </div>
    </div>
  )
}

export default Home
