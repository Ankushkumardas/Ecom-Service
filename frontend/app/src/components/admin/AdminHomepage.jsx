import React from 'react'
import { Link } from 'react-router'
const orders = [
    {
        _id: 212,
        user: {
            naame: "John"
        }, totalPrice: 23,
        status: "Processing"
    },
     {
        _id: 12,
        user: {
            naame: "John"
        }, totalPrice: 23,
        status: "Processing"
    },
     {
        _id: 212,
        user: {
            naame: "John"
        }, totalPrice: 23,
        status: "Processing"
    }
]
const AdminHomepage = () => {
    return (
        <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-xl font-semibold mb-6 text-gray-800">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 rounded bg-white border border-gray-200">
                        <p className="text-gray-500 text-sm">Revenue</p>
                        <p className="text-lg font-medium mt-1">$1000</p>
                    </div>
                    <div className="p-4 rounded bg-white border border-gray-200">
                        <p className="text-gray-500 text-sm">Total Orders</p>
                        <p className="text-lg font-medium mt-1">12</p>
                        <Link
                            to={`/admin/orders`}
                            className="text-blue-600 text-xs hover:underline mt-2 inline-block"
                        >
                            Manage Orders
                        </Link>
                    </div>
                    <div className="p-4 rounded bg-white border border-gray-200">
                        <p className="text-gray-500 text-sm">Products</p>
                        <p className="text-lg font-medium mt-1">20</p>
                        <Link
                            to={`/admin/products`}
                            className="text-blue-600 text-xs hover:underline mt-2 inline-block"
                        >
                            Manage Products
                        </Link>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-medium mb-3 text-gray-700">Recent Orders</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-gray-700 border border-gray-200 bg-white rounded">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-2 px-3 border-b text-left font-normal">Order ID</th>
                                    <th className="py-2 px-3 border-b text-left font-normal">User</th>
                                    <th className="py-2 px-3 border-b text-left font-normal">Total Price</th>
                                    <th className="py-2 px-3 border-b text-left font-normal">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.length > 0 ? (
                                    orders.map((order) => (
                                        <tr key={order._id} className="hover:bg-gray-50">
                                            <td className="py-2 px-3 border-b">{order._id}</td>
                                            <td className="py-2 px-3 border-b">{order.user.naame}</td>
                                            <td className="py-2 px-3 border-b">${order.totalPrice}</td>
                                            <td className="py-2 px-3 border-b">{order.status}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="py-4 text-center text-gray-400">
                                            No data
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHomepage
