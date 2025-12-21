import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const cart = {
    products: [
        {
            name: "T-Shirt",
            size: "M",
            color: "Blue",
            price: 19.99,
            images: ["https://example.com/images/tshirt-blue-1.jpg", "https://example.com/images/tshirt-blue-2.jpg"]
        },
        {
            name: "Sneakers",
            size: "9",
            color: "White",
            price: 49.99,
            images: ["https://example.com/images/sneakers-white-1.jpg", "https://example.com/images/sneakers-white-2.jpg"]
        },
        {
            name: "Jacket",
            size: "L",
            color: "Black",
            price: 89.99,
            images: ["https://example.com/images/jacket-black-1.jpg", "https://example.com/images/jacket-black-2.jpg"]
        }
    ], totalprice: 219,
};

const Checkout = () => {
    const navigate = useNavigate();

    const [shippingaddress, setshippingaddress] = useState({
        firstname: "",
        lastname: "",
        address: "",
        phone: "",
        country: "",
        state: "",
        zip: ""
    })
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(shippingaddress)
    }

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto py-10 px-4 tracking-tight">
                <div className="rounded-lg p-8 bg-white shadow-lg lg:col-span-3">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
                    <form onSubmit={handlesubmit} className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-700">Contact Details</h3>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                                <input
                                    type="text"
                                    value={shippingaddress.email || ""}
                                    onChange={e => setshippingaddress({ ...shippingaddress, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-700">Delivery</h3>
                            <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.firstname}
                                        onChange={e => setshippingaddress({ ...shippingaddress, firstname: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.lastname}
                                        onChange={e => setshippingaddress({ ...shippingaddress, lastname: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.phone}
                                        onChange={e => setshippingaddress({ ...shippingaddress, phone: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.address}
                                        onChange={e => setshippingaddress({ ...shippingaddress, address: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Country</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.country}
                                        onChange={e => setshippingaddress({ ...shippingaddress, country: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">State</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.state}
                                        onChange={e => setshippingaddress({ ...shippingaddress, state: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">Zip</label>
                                <input
                                    type="text"
                                    value={shippingaddress.zip}
                                    onChange={e => setshippingaddress({ ...shippingaddress, zip: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black rounded-md text-white py-2 px-4 mt-4 font-semibold hover:bg-gray-900 transition"
                        >
                            CheckOut
                        </button>
                    </form>
                </div>
                <div className="rounded-lg p-8 bg-gray-50 shadow-lg lg:col-span-2">
                    {/* You can add cart summary or order details here */}
                </div>
            </div>
        </div>
    )
}

export default Checkout
