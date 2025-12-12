import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 space-y-10 '>
            {products && products.length > 0 ? products.map((a, i) => (
                <Link key={a._id || i} to={`/product/${a._id}`} className='block'>
                    <div className='w-[70%] h-auto flex items-center flex-col justify-center bg-white mx-auto'>
                        <img
                            src={a.images?.url || 'https://via.placeholder.com/300x400?text=No+Image'}
                            alt={a.name || 'Product Image'}
                            className='object-cover w-full h-full rounded-md shadow hover:scale-105 duration-200 transition-all'
                            style={{ maxHeight: '100%', maxWidth: '100%' }}
                        />
                        <div className='text-center mt-2'>
                            <p className='font-semibold'>{a.name || 'No Name'}</p>
                            <p className='text-gray-600'>${a.price != null ? a.price : 'N/A'}</p>
                        </div>
                    </div>
                </Link>
            )) : (
                <div className='col-span-4 text-center text-gray-500 py-10'>
                    No products found.
                </div>
            )}
        </div>
    )
}

export default ProductGrid
