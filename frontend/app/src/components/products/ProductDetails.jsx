import React, { useState } from 'react'
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';

const ProductDetails = () => {
    const product = {
        name: "aksjbc",
        price: 23,
        originalPrice: 134,
        brand: "csa",
        description: "asc",
        materials: "sca",
        sizes: ["M", "S", "L", "XL"],
        colors: ["Red", "Black"],
        images: [
            { url: "https://picsum.photos/200?random=2", alt: "asck" },
            { url: "https://picsum.photos/200?random=14", alt: "ascsack" }
        ]
    };
    const similarproducts = [
        {
            _id: 3,
            name: "Leather Boots",
            price: 89,
            images: { url: "https://picsum.photos/200?random=3" }
        },
        {
            _id: 4,
            name: "Summer Dress",
            price: 45,
            images: { url: "https://picsum.photos/200?random=4" }
        },
        {
            _id: 5,
            name: "Wool Scarf",
            price: 19,
            images: { url: "https://picsum.photos/200?random=5" }
        },
        {
            _id: 6,
            name: "Sneakers",
            price: 49,
            images: { url: "https://picsum.photos/200?random=6" }
        }
    ];
    const [mainimage, setmainimage] = useState("");
    const [size, setsize] = useState("");
    const [selectcolor, setselectcolor] = useState("");
    const [quantity, setquantity] = useState(1);
    const [disablebutton, setdisablebutton] = useState(false);
    const handleaddtocart = () => {
        if (!selectcolor || !size || !quantity) {
            toast.error("Fill all the fields")
            return;
        }
        setdisablebutton(true)
        setTimeout(() => {
            toast.success("Item Added to Cart")
            setdisablebutton(false)
        }, 1000);

    }
    return (
        <div className=' max-w-6xl mx-auto'>
            <div className=' flex flex-col md:flex-row mt-20'>
                {/* thumbnail */}
                <div className='hidden md:flex flex-col space-y-4'>
                    {
                        product.images.map((data, i) => {
                            return <div key={i}>
                                <img src={data.url} alt={data.alt} className='w-20 h-auto cursor-pointer rounded-sm' onClick={() => setmainimage(data.url)} />
                            </div>
                        })
                    }
                </div>
                {/* main */}
                <div className='md:w-1/2'>
                    <div className='ml-2'>
                        <img src={mainimage || product.images[0].url} alt="" className='w-full h-auto rounded-sm object-cover' />
                    </div>
                </div>
                {/* mobile humbnails */}
                <div className='md:hidden flex  space-x-4 mt-6 mx-2'>
                    {
                        product.images.map((data, i) => {
                            return <div key={i}>
                                <img src={data.url} alt={data.alt} className='w-20 h-auto cursor-pointer rounded-sm' onClick={() => setmainimage(data.url)} />
                            </div>
                        })
                    }
                </div>
                {/* right sectin */}
                <div className='md:w-1/2 md:ml-6'>
                    <h1>{product.name}</h1>
                    <p>{product.originalPrice && `$${product.originalPrice}`}</p>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <div>
                        <p>Sizes:</p>
                        <div className={` flex gap-2 `}>
                            {product.sizes.map((a, i) => (
                                <div key={i}>
                                    <p className={`px-2 py-1 rounded-md shadow cursor-pointer ${size === a ? "ring-1 ring-blue-500" : ""}`} onClick={() => setsize(a)}>{a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p>Colors:</p>
                        <div className=' flex gap-2'>
                            {product.colors.map((a, i) => (
                                <div key={i}>
                                    <button className={`w-8 h-8 rounded-full ${selectcolor === a ? "ring-1 ring-blue-500" : ""}`} style={{ backgroundColor: a.toLocaleLowerCase() }} onClick={() => setselectcolor(a)}></button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p>Quantity:</p>
                        <div className=' flex gap-2 items-center'>
                            <button className=' px-2 py-1 shadow rounded-md cursor-pointer' onClick={() => setquantity(prev => prev - 1)}>-</button>
                            <span>{quantity}</span>
                            <button className=' px-2 py-1 shadow rounded-md cursor-pointer' onClick={() => setquantity(prev => prev + 1)}>+</button>
                        </div>
                    </div>
                    <button className=' bg-black text-white px-2 py-1 rounded-md mt-2 tracking-tight' onClick={handleaddtocart} disabled={disablebutton} >{disablebutton ? "Adding To Cart" : "Add to cart"}</button>
                </div>
            </div>
            {/*  */}
            <div className=' my-20'>
                <h2 className=' text-center tracking-tighter text-4xl font-semibold'>You may also like</h2>
                <div>
                    <ProductGrid products={similarproducts}/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
