import React from 'react'

const data=[
    {_id:23,user:{name:"cac"},totalprice:232,status:"Delivered"},
    {_id:223,user:{name:"cac"},totalprice:232,status:"Delivered"},
    {_id:213,user:{name:"cac"},totalprice:232,status:"Delivered"},
]
const AdminOrderManagemnt = () => {
    const handlestatuschanges=(id,value)=>{
        console.log(id,value)
    }
return (
    <div className="container mx-auto">
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-lg font-semibold mb-4">Order Management</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm border border-gray-200 rounded">
                    <thead>
                        <tr className="bg-gray-100 text-xs uppercase">
                            <th className="py-2 px-3 border-b">Order Id</th>
                            <th className="py-2 px-3 border-b">Customer</th>
                            <th className="py-2 px-3 border-b">Total Price</th>
                            <th className="py-2 px-3 border-b">Status</th>
                            <th className="py-2 px-3 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((order) => (
                            <tr key={order._id} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-3">{order._id}</td>
                                <td className="py-2 px-3">{order.user.name}</td>
                                <td className="py-2 px-3">${order.totalprice}</td>
                                <td className="py-2 px-3">
                                    <select
                                        value={order.status}
                                        onChange={(e) => handlestatuschanges(order._id, e.target.value)}
                                        className="border rounded px-2 py-1 text-xs"
                                    >
                                        <option value="Delivered">Delivered</option>
                                        <option value="Processing">Processing</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </td>
                                <td className="py-2 px-3 text-center">
                                   <button onClick={()=>handlestatuschanges(data._id,"Delivered")}>Mark As Delivered</button>
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

export default AdminOrderManagemnt
