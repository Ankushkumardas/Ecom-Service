import React from 'react'
import { Link } from 'react-router-dom'
const products = [
    {
        _id: 2323,
        name: "sfd",
        price: 2332,
        sku: '32432'
    }
]
const AdminProductManagemnt = () => {
    const handledelete = (id) => {
        console.log(id)
    }
    return (
        <div className="container mx-auto py-4">
            <div className="max-w-7xl mx-auto bg-white p-4 rounded shadow-sm">
                <h1 className="text-lg font-semibold mb-4 text-gray-700">Product Management</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-100 rounded">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-2 px-2 border-b text-left text-sm border-gray-300 text-gray-600">Name</th>
                                <th className="py-2 px-2 border-b text-left text-sm border-gray-300 text-gray-600">Price</th>
                                <th className="py-2 px-2 border-b text-left text-sm border-gray-300 text-gray-600">SKU</th>
                                <th className="py-2 px-2 border-b text-left text-sm border-gray-300 text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((d) => (
                                <tr key={d._id} className="hover:bg-gray-100">
                                    <td className="py-2 px-2 border-b  border-gray-300 text-sm">{d.name}</td>
                                    <td className="py-2 px-2 border-b border-gray-300 text-sm">${d.price}</td>
                                    <td className="py-2 px-2 border-b border-gray-300 text-sm">{d.sku}</td>
                                    <td className="py-2 px-2 border-b border-gray-300 text-sm">
                                        <Link
                                            to={`/admin/products/${d._id}/edit`}
                                            className="mr-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs hover:bg-blue-200 transition"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handledelete(d._id)}
                                            className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminProductManagemnt
