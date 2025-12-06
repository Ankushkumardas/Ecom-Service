import React from 'react'
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

const NewArrivals = () => {
    const products = [
        {
            _id: 1,
            name: "T-Shirt",
            size: "M",
            color: "Red",
            quantity: 10,
            price: 14,
            image: {url:"https://picsum.photos/200?random=1", alttext:"text"}
        },
        {
            _id: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            quantity: 5,
            price: 30,
            image:{url:"https://picsum.photos/200?random=2", alttext:"text"}
        },
        {
            _id: 3,
            name: "Sneakers",
            size: "42",
            color: "White",
            quantity: 3,
            price: 50,
            image: {url:"https://picsum.photos/200?random=3", alttext:"text"}
        },
        {
            _id: 4,
            name: "Jacket",
            size: "XL",
            color: "Black",
            quantity: 2,
            price: 80,
            image:{url:"https://picsum.photos/200?random=4", alttext:"text"}
        },
        {
            _id: 5,
            name: "Hat",
            size: "One Size",
            color: "Green",
            quantity: 7,
            price: 20,
            image: {url:"https://picsum.photos/200?random=5", alttext:"text"}
        },
        {
            _id: 6,
            name: "Socks",
            size: "M",
            color: "Gray",
            quantity: 15,
            price: 8,
            image: {url:"https://picsum.photos/200?random=6", alttext:"text"}
        },
         {
            _id: 7,
            name: "Socks",
            size: "M",
            color: "Gray",
            quantity: 15,
            price: 8,
            image: {url:"https://picsum.photos/200?random=7", alttext:"text"}
        },
         {
            _id: 8,
            name: "Socks",
            size: "M",
            color: "Gray",
            quantity: 15,
            price: 8,
            image: {url:"https://picsum.photos/200?random=8", alttext:"text"}
        }
    ];
    return (
        <section>
            <div className="relative container mx-auto mb-10 px-4">
                <div className="text-center flex flex-col items-center justify-center mt-10">
                    <h2 className="text-4xl md:text-5xl tracking-tighter font-semibold mb-2">New Arrivals</h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, sunt! Dicta cupiditate eligendi voluptas eius possimus nisi? Veniam, illum labore!
                    </p>
                </div>

                {/* Navigation Buttons */}
                {/* <div className="absolute right-4 bottom-[-50px] flex space-x-2 z-10">
                    <button className="shadow p-2 rounded-md bg-white hover:bg-slate-100 transition">
                        <ChevronLeft />
                    </button>
                    <button className="shadow p-2 rounded-md bg-white hover:bg-slate-100 transition">
                        <ChevronLeft className="rotate-180" />
                    </button>
                </div> */}

                {/* Products Grid */}
                <div className="mt-12 flex space-x-6 overflow-x-scroll relative">
                    {products.map((data) => (
                        <div key={data._id} className="relative  min-w-[80%] md:min-w-[40%] lg:min-w-[30%] p-2">
                            <img
                                src={data.image.url}
                                alt={data.image.alttext}
                                className='w-full h-auto object-contain rounded-md'
                            />
                            <div className="absolute top-3 right-3">
                                <Link
                                    to={`/product/${data._id}`}
                                    className="bg-white text-black text-xs px-3 py-1 rounded transition shadow-md"
                                >
                                    {data.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewArrivals
