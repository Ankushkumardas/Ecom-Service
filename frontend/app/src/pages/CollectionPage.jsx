import React, { useEffect, useRef, useState } from 'react'
import FilterSidebar from '../components/FilterSidebar';
import SortOptions from '../components/SortOptions';
import ProductGrid from '../components/products/ProductGrid';

const CollectionPage = () => {
    const [products, setproducts] = useState([])
    const sidebar=useRef(null);
    const [issidebaropen,setissidebaropen]=useState(false);
    const togglesidebar=()=>{
        setissidebaropen(!issidebaropen)
    }
    const handleclickoutside=(e)=>{
        if (sidebar.current && !sidebar.current.contains(e.target)) {
            setissidebaropen(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('mousedown',handleclickoutside)
        return ()=>{
            document.removeEventListener('mousedown',handleclickoutside);
        }
    },[])
    const data = [
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
  },

  // ----- 30 More Products -----
  {
    _id: 7,
    name: "Denim Jacket",
    price: 79,
    images: { url: "https://picsum.photos/200?random=101" }
  },
  {
    _id: 8,
    name: "Sports Watch",
    price: 120,
    images: { url: "https://picsum.photos/200?random=102" }
  },
  {
    _id: 9,
    name: "Cotton T-Shirt",
    price: 15,
    images: { url: "https://picsum.photos/200?random=103" }
  },
  {
    _id: 10,
    name: "Backpack",
    price: 59,
    images: { url: "https://picsum.photos/200?random=104" }
  },
  {
    _id: 11,
    name: "Formal Shirt",
    price: 35,
    images: { url: "httpsum.photos/200?random=105" }
  },
  {
    _id: 12,
    name: "Slim Fit Jeans",
    price: 55,
    images: { url: "https://picsum.photos/200?random=106" }
  },
  {
    _id: 13,
    name: "Running Shorts",
    price: 25,
    images: { url: "https://picsum.photos/200?random=107" }
  },
  {
    _id: 14,
    name: "Travel Bag",
    price: 99,
    images: { url: "https://picsum.photos/200?random=108" }
  },
  {
    _id: 15,
    name: "Winter Coat",
    price: 150,
    images: { url: "https://picsum.photos/200?random=109" }
  },
  {
    _id: 16,
    name: "Beanie Hat",
    price: 12,
    images: { url: "https://picsum.photos/200?random=110" }
  },
  {
    _id: 17,
    name: "Sunglasses",
    price: 39,
    images: { url: "https://picsum.photos/200?random=111" }
  },
  {
    _id: 18,
    name: "Flip Flops",
    price: 10,
    images: { url: "https://picsum.photos/200?random=112" }
  },
  {
    _id: 19,
    name: "Sports Cap",
    price: 18,
    images: { url: "https://picsum.photos/200?random=113" }
  },
  {
    _id: 20,
    name: "Leather Belt",
    price: 22,
    images: { url: "https://picsum.photos/200?random=114" }
  },
  {
    _id: 21,
    name: "Casual Hoodie",
    price: 42,
    images: { url: "https://picsum.photos/200?random=115" }
  },
  {
    _id: 22,
    name: "Laptop Sleeve",
    price: 30,
    images: { url: "https://picsum.photos/200?random=116" }
  },
  {
    _id: 23,
    name: "Leather Wallet",
    price: 28,
    images: { url: "https://picsum.photos/200?random=117" }
  },
  {
    _id: 24,
    name: "Yoga Pants",
    price: 38,
    images: { url: "https://picsum.photos/200?random=118" }
  },
  {
    _id: 25,
    name: "Running Shoes",
    price: 95,
    images: { url: "https://picsum.photos/200?random=119" }
  },
  {
    _id: 26,
    name: "Graphic Hoodie",
    price: 55,
    images: { url: "https://picsum.photos/200?random=120" }
  },
  {
    _id: 27,
    name: "Cotton Socks",
    price: 8,
    images: { url: "https://picsum.photos/200?random=121" }
  },
  {
    _id: 28,
    name: "Leather Gloves",
    price: 35,
    images: { url: "https://picsum.photos/200?random=122" }
  },
  {
    _id: 29,
    name: "Windbreaker Jacket",
    price: 70,
    images: { url: "https://picsum.photos/200?random=123" }
  },
  {
    _id: 30,
    name: "Travel Shoes",
    price: 85,
    images: { url: "https://picsum.photos/200?random=124" }
  },
  {
    _id: 31,
    name: "Cargo Pants",
    price: 48,
    images: { url: "https://picsum.photos/200?random=125" }
  },
  {
    _id: 32,
    name: "Winter Gloves",
    price: 15,
    images: { url: "https://picsum.photos/200?random=126" }
  },
  {
    _id: 33,
    name: "Training Jacket",
    price: 60,
    images: { url: "https://picsum.photos/200?random=127" }
  },
  {
    _id: 34,
    name: "Office Shoes",
    price: 110,
    images: { url: "https://picsum.photos/200?random=128" }
  },
  {
    _id: 35,
    name: "Polo T-Shirt",
    price: 29,
    images: { url: "https://picsum.photos/200?random=129" }
  },
  {
    _id: 36,
    name: "Casual Shorts",
    price: 20,
    images: { url: "https://picsum.photos/200?random=130" }
  }
];


  useEffect(()=>{
    setTimeout(() => {
        setproducts(data);
    }, 2000);
  },[])

    return (
        <div className='flex flex-col lg:flex-row '>
            {/* mobile */}
            <button className='lg:hidden flex p-2' onClick={togglesidebar}>Filter</button>
            {/* filter sidebar */}
            <div
                ref={sidebar}
                className={`fixed top-0 left-0 ${issidebaropen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 shadow w-64 h-full z-50 bg-white lg:static lg:translate-x-0`}
            >
                <FilterSidebar issidebaropen={issidebaropen} setissidebaropen={setissidebaropen}/>
            </div>
            {/*  */}
            <div className=' flex-grow p-4 overflow-y-scroll  h-screen'>
                <h2>All Collections</h2>
                <div>
                    {/* sort options */}
                    <SortOptions/>
                    {/* prdouts */}
                    <ProductGrid products={products}/>
                </div>
            </div>
        </div>
    )
}

export default CollectionPage

