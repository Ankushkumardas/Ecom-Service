import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Paypal from './Paypal';

const cart = {
    products: [
        {
            name: "T-Shirt",
            size: "M",
            color: "Blue",
            price: 19.99,
            images: "https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" },
        {
            name: "Sneakers",
            size: "9",
            color: "White",
            price: 49.99,
            images:"https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Jacket",
            size: "L",
            color: "Black",
            price: 89.99,
            images: "https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
        }
    ], totalprice: 219,
};

const Checkout = () => {
    const navigate = useNavigate();
    const [checkoutid, setcheckoutid] = useState(1);
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

    const handlesuccess=(details)=>{
        console.log("payment successfull",details)
        navigate("/order-confirmation");
    }
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto py-10 px-4 tracking-tight">
                {/* Checkout Form */}
                <div className="rounded-lg p-8 bg-white shadow-lg lg:col-span-3">
                    <h2 className="text-2xl font-bold mb-8 text-gray-900">Checkout</h2>
                    <form onSubmit={handlesubmit} className="space-y-8">
                        {/* Contact Details */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-700">Contact Details</h3>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={shippingaddress.email || ""}
                                    onChange={e => setshippingaddress({ ...shippingaddress, email: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                />
                            </div>
                        </div>
                        {/* Delivery Details */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-700">Delivery</h3>
                            <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.firstname}
                                        onChange={e => setshippingaddress({ ...shippingaddress, firstname: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.lastname}
                                        onChange={e => setshippingaddress({ ...shippingaddress, lastname: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        value={shippingaddress.phone}
                                        onChange={e => setshippingaddress({ ...shippingaddress, phone: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Address</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.address}
                                        onChange={e => setshippingaddress({ ...shippingaddress, address: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Country</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.country}
                                        onChange={e => setshippingaddress({ ...shippingaddress, country: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">State</label>
                                    <input
                                        type="text"
                                        value={shippingaddress.state}
                                        onChange={e => setshippingaddress({ ...shippingaddress, state: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-600 mb-2">Zip</label>
                                <input
                                    type="text"
                                    value={shippingaddress.zip}
                                    onChange={e => setshippingaddress({ ...shippingaddress, zip: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                />
                            </div>
                        </div>
                        {/* Payment Button */}
                        <div>
                            {checkoutid ? (
                                <button
                                    type="button"
                                    className="w-full bg-black rounded-lg text-white py-3 px-4 mt-2 hover:bg-gray-900 transition font-semibold text-lg"
                                    onClick={handlesuccess}
                                >
                                    Proceed to Payment
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="w-full bg-black rounded-lg text-white py-3 px-4 mt-2 hover:bg-gray-900 transition font-semibold text-lg"
                                >
                                    Checkout
                                </button>
                            )}
                        </div>
                    </form>
                </div>
                {/* Order Summary */}
                <div className="rounded-lg p-8 bg-gray-50 shadow-lg lg:col-span-2">
                    <h2 className="text-xl tracking-tight font-semibold mb-4 text-gray-800">Order Summary</h2>
                    <div className="divide-y divide-gray-200">
                        {cart.products.map((data, i) => (
                            <div key={i} className="flex items-center gap-4 py-5">
                                <img
                                    src={data.images}
                                    alt={data.name}
                                    className="w-20 h-20 object-cover rounded-md border border-gray-200"
                                />
                                <div className="flex-1">
                                    <div className="font-semibold text-gray-900">{data.name}</div>
                                    <div className="text-sm text-gray-500">
                                        Size: <span className="font-medium">{data.size}</span> &nbsp;|&nbsp;
                                        Color: <span className="font-medium">{data.color}</span>
                                    </div>
                                    <div className="text-base font-bold text-black mt-1">${data.price.toFixed(2)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                        <span className="font-medium text-gray-700">Subtotal</span>
                        <span className="font-bold text-lg text-black">${cart.totalprice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
