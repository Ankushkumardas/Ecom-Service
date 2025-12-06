import React from 'react'
import { Trash } from 'lucide-react';

const CartContent = () => {
  const cartproducts = [
    {
      productid: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 10,
      price: 14,
      image: "https://picsum.photos/200?random=1"
    },
    {
      productid: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 5,
      price: 30,
      image: "https://picsum.photos/200?random=2"
    },
    {
      productid: 3,
      name: "Sneakers",
      size: "42",
      color: "White",
      quantity: 3,
      price: 50,
      image: "https://picsum.photos/200?random=3"
    },
    {
      productid: 4,
      name: "Jacket",
      size: "XL",
      color: "Black",
      quantity: 2,
      price: 80,
      image: "https://picsum.photos/200?random=4"
    },
    {
      productid: 5,
      name: "Hat",
      size: "One Size",
      color: "Green",
      quantity: 7,
      price: 20,
      image: "https://picsum.photos/200?random=5"
    },
    {
      productid: 6,
      name: "Socks",
      size: "M",
      color: "Gray",
      quantity: 15,
      price: 8,
      image: "https://picsum.photos/200?random=6"
    }
  ]
  return (
    <div className="space-y-4 ">
      {cartproducts.map((data) => (
        <div
          className="flex items-center border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
          key={data.productid}
        >
          <img
            src={data.image}
            alt={data.name}
            className="w-24 h-24 object-cover rounded-lg mr-6 "
          />
          <div className="flex-1">
            <div className=' flex justify-between'>
              <div className='flex space-x-2'>
            <div className="font-semibold text-lg mb-1">{data.name}</div>
            <div className="font-semibold text-lg mb-1">${data.price}</div>
              </div>
              <button><Trash size={20} /></button>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              Size: <span className="font-medium text-gray-700">{data.size}</span> | Color: <span className="font-medium text-gray-700">{data.color}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Quantity:</span>
              <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold text-lg">-</button>
              <span className="px-3">{data.quantity}</span>
              <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold text-lg">+</button>
            </div>
          
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartContent
