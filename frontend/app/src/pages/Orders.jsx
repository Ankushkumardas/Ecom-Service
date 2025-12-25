import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setOrders([
                {
                    _id: 1,
                    createdAt: new Date('2024-06-01'),
                    shippingAddress: { city: "New York", country: "USA" },
                    orderedItems: [
                        {
                            name: 'T-shirt',
                            image: ""
                        }
                    ],
                    totalPrice: 50,
                    isPaid: true
                },
                {
                    _id: 2,
                    createdAt: new Date('2024-06-02'),
                    shippingAddress: { city: "London", country: "UK" },
                    orderedItems: [
                        {
                            name: 'Shoes',
                            image: ""
                        }
                    ],
                    totalPrice: 80,
                    isPaid: false
                },
                {
                    _id: 3,
                    createdAt: new Date('2024-06-03'),
                    shippingAddress: { city: "Paris", country: "France" },
                    orderedItems: [
                        {
                            name: 'Hat',
                            image: ""
                        }
                    ],
                    totalPrice: 30,
                    isPaid: true
                },
                {
                    _id: 4,
                    createdAt: new Date('2024-06-04'),
                    shippingAddress: { city: "Berlin", country: "Germany" },
                    orderedItems: [
                        {
                            name: 'Jacket',
                            image: ""
                        }
                    ],
                    totalPrice: 120,
                    isPaid: false
                },
                {
                    _id: 5,
                    createdAt: new Date('2024-06-05'),
                    shippingAddress: { city: "Tokyo", country: "Japan" },
                    orderedItems: [
                        {
                            name: 'Bag',
                            image: ""
                        }
                    ],
                    totalPrice: 70,
                    isPaid: true
                },
            ]);
        }, 2000);
    }, []);

    const navigate = useNavigate();

    const handlerowclick = (id) => {
        navigate(`/order/${id}`)
    }

    return (
        <div className="max-w-7xl mx-auto  px-4 my-10">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">My Orders</h2>
            <div className="relative rounded-lg overflow-x-auto shadow-md bg-white">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 ">
                        <tr>
                            <th className="px-2 py-2 font-semibold">Image</th>
                            <th className="px-2 py-2 font-semibold">Order ID</th>
                            <th className="px-2 py-2 font-semibold">Shipping Address</th>
                            <th className="px-2 py-2 font-semibold">Is Paid</th>
                            <th className="px-2 py-2 font-semibold">Total Price</th>
                            <th className="px-2 py-2 font-semibold">Ordered Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-10 text-gray-400">
                                    Loading orders...
                                </td>
                            </tr>
                        ) : (
                            orders.map((order) => (
                                <tr
                                    key={order._id}
                                    onClick={() => handlerowclick(order._id)}
                                    className="border-b border-slate-300 hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-2 py-2">
                                        {order.orderedItems[0]?.image ? (
                                            <img
                                                src={order.orderedItems[0].image}
                                                alt={order.orderedItems[0].name}
                                                className="w-10 h-10 object-cover rounded"
                                            />
                                        ) : (
                                            <span className="inline-block px-2 py-1 bg-gray-200 rounded text-xs text-gray-500">
                                                No Image
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-2 py-2 font-mono text-blue-600">{order._id}</td>
                                    <td className="px-2 py-2">
                                        <span className="block">{order.shippingAddress.city}</span>
                                        <span className="text-xs text-gray-400">{order.shippingAddress.country}</span>
                                    </td>
                                    <td className="px-2 py-2">
                                        <span
                                            className={`inline-block px-2 py-1 rounded text-xs font-semibold ${order.isPaid
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {order.isPaid ? "Yes" : "No"}
                                        </span>
                                    </td>
                                    <td className="px-2 py-2 font-semibold">${order.totalPrice}</td>
                                    <td className="px-2 py-2">
                                        {order.orderedItems.map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded mr-1 text-xs"
                                            >
                                                {item.name}
                                            </span>
                                        ))}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders
