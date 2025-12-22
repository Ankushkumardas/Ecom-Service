import React from 'react'

const checkoutitems = {
    _id: "827e3",
    createdAt: new Date(),
    items: [
        {
            productId: "p001",
            name: "T-Shirt",
            color: "Red",
            size: "M",
            price: 19.99,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1766246125511-81f02cf6278c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D"
        },
        {
            productId: "p002",
            name: "Jeans",
            color: "Blue",
            size: "32",
            price: 49.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1761839257961-4dce65b72d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            productId: "p003",
            name: "Sneakers",
            color: "White",
            size: "9",
            price: 79.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1761839257664-ecba169506c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
}
const OrderConfirmationPage = () => {
return (
    <div className="container mx-auto">
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-center text-emerald-700 text-3xl font-bold tracking-tight mb-6">
                Thank You For Your Order
            </h1>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="mb-4">
                    <span className="font-semibold">Order ID:</span> {checkoutitems._id}
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Order Date:</span>{" "}
                    {checkoutitems.createdAt.toLocaleString()}
                </div>
                <h2 className="text-xl font-semibold mb-4">Items:</h2>
                <ul>
                    {checkoutitems.items.map((item) => (
                        <li
                            key={item.productId}
                            className="flex items-center border-b py-4 last:border-b-0"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded mr-4 "
                            />
                            <div className="flex-1">
                                <div className="font-bold text-lg">{item.name}</div>
                                <div className="text-gray-600">
                                    Color: {item.color} | Size: {item.size}
                                </div>
                                <div className="text-gray-600">
                                    Quantity: {item.quantity}
                                </div>
                            </div>
                            <div className="font-semibold text-emerald-700 text-lg ml-4">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="text-right mt-6 text-xl font-bold">
                    Total: $
                    {checkoutitems.items
                        .reduce(
                            (sum, item) => sum + item.price * item.quantity,
                            0
                        )
                        .toFixed(2)}
                </div>
            </div>
        </div>
    </div>
);
}

export default OrderConfirmationPage
