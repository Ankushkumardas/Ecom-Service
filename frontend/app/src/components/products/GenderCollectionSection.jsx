import React from 'react'
import { Link } from 'react-router'

const GenderCollectionSection = () => {
    return (
        <section className="py-10 lg:py-16 bg-gray-50">
            <div className="container mx-auto flex flex-col md:flex-row gap-8">
                <div className="relative flex-1 h-80 rounded-xl overflow-hidden shadow group cursor-pointer bg-white">
                    <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
                        alt="Women's Collection"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-50">
                        <p className="text-white text-2xl font-semibold tracking-wide">
                            <Link to={"/collections/all?gender=women"}>Women's Colection</Link>
                        </p>
                    </div>
                </div>
                {/* Men's Collection */}
                <div className="relative flex-1 h-80 rounded-xl overflow-hidden shadow group cursor-pointer bg-white">
                    <img
                        src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"
                        alt="Men's Collection"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-50">
                        <p className="text-white text-2xl font-semibold tracking-wide"><Link to={"/collections/all?gender=men"}>Men's Collection</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenderCollectionSection
