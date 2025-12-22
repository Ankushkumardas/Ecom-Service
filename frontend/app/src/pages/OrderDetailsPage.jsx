import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const OrderDetailsPage = () => {
    const { id } = useParams();
    const [orderdetails, setorderdetails] = useState('');

    useEffect(() => {
        const mockdetails = {
            _id: id,
            createdAt: new Date(),
            ispaid: true,
            isdelievered: false,
            paymentMethod: "Paypal",
            shippingMethod: 'Standard',
            shippingAddress: "test Address",
            orderitems: [
                {
                    productid: "prod1",
                    name: "Product One",
                    price: 29.99,
                    quantity: 2,
                    image: "https://images.unsplash.com/photo-1761839256602-0e28a5ab928d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    productid: "prod2",
                    name: "Product Two",
                    price: 49.99,
                    quantity: 1,
                    image: "https://images.unsplash.com/photo-1765634898266-6bd03cb0fce7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    productid: "prod3",
                    name: "Product Three",
                    price: 19.99,
                    quantity: 3,
                    image: "https://images.unsplash.com/photo-1761839262867-af53d08b0eb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D"
                }
            ]
        }
        setorderdetails(mockdetails)
    }, [id]);

    return (
        <div className="min-h-screen bg-slate-50 py-4 px-1">
            <div className="max-w-4xl mx-auto">
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h2 className="text-2xl font-semibold text-slate-700">Order Details</h2>
                    <span className="text-slate-400 text-xs">
                        Placed on: {orderdetails.createdAt && new Date(orderdetails.createdAt).toLocaleString()}
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 border border-slate-100">
                        <div className="flex items-center gap-1">
                            <span className="font-medium text-slate-600">Order ID:</span>
                            <span className="text-slate-400 break-all">{orderdetails._id}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-medium text-slate-600">Status:</span>
                            {orderdetails.ispaid ? (
                                <span className="inline-flex items-center gap-1 px-1 py-0.5 rounded bg-green-50 text-green-700 text-xs font-medium">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    Paid
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1 px-1 py-0.5 rounded bg-red-50 text-red-700 text-xs font-medium">
                                    Not Paid
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-medium text-slate-600">Delivery Status:</span>
                            {orderdetails.isdelievered ? (
                                <span className="inline-flex items-center gap-1 px-1 py-0.5 rounded bg-green-50 text-green-700 text-xs font-medium">
                                    Delivered
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1 px-1 py-0.5 rounded bg-yellow-50 text-yellow-700 text-xs font-medium">
                                    Not Delivered
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-medium text-slate-600">Payment Method:</span>
                            <span className="text-slate-400">{orderdetails.paymentMethod}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-medium text-slate-600">Shipping Method:</span>
                            <span className="text-slate-400">{orderdetails.shippingMethod}</span>
                        </div>
                        <div className="flex items-start gap-1">
                            <span className="font-medium text-slate-600">Shipping Address:</span>
                            <span className="text-slate-400">{orderdetails.shippingAddress}</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 border border-slate-100">
                        <span className="font-medium text-slate-600 mb-1">Order Summary</span>
                        <div className="flex justify-between text-slate-500">
                            <span>Items:</span>
                            <span>
                                {orderdetails.orderitems
                                    ? orderdetails.orderitems.reduce((sum, item) => sum + item.quantity, 0)
                                    : 0}
                            </span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                            <span>Total:</span>
                            <span className="font-bold text-base text-slate-700">
                                $
                                {orderdetails.orderitems
                                    ? orderdetails.orderitems
                                        .reduce((sum, item) => sum + item.price * item.quantity, 0)
                                        .toFixed(2)
                                    : "0.00"}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 overflow-x-auto border border-slate-100">
                    <h3 className="mb-2 font-medium text-lg text-slate-700">Products</h3>
                    <table className="min-w-full border-separate border-spacing-y-1">
                        <thead>
                            <tr>
                                <th className="text-left px-2 py-1 text-slate-500 font-medium">Image</th>
                                <th className="text-left px-2 py-1 text-slate-500 font-medium">Name</th>
                                <th className="text-left px-2 py-1 text-slate-500 font-medium">Price</th>
                                <th className="text-left px-2 py-1 text-slate-500 font-medium">Quantity</th>
                                <th className="text-left px-2 py-1 text-slate-500 font-medium">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderdetails.orderitems &&
                                orderdetails.orderitems.map((item) => (
                                    <tr key={item.productid} className="bg-slate-50 hover:bg-slate-100 rounded">
                                        <td className="px-2 py-1">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-12 h-12 object-cover rounded border"
                                            />
                                        </td>
                                        <td className="px-2 py-1 font-medium text-slate-600">{item.name}</td>
                                        <td className="px-2 py-1 text-slate-500">${item.price.toFixed(2)}</td>
                                        <td className="px-2 py-1 text-slate-500">{item.quantity}</td>
                                        <td className="px-2 py-1 text-slate-700 font-semibold">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={4} className="px-2 py-1 text-right font-bold text-slate-600">
                                    Total
                                </td>
                                <td className="px-2 py-1 font-bold text-base text-slate-700">
                                    $
                                    {orderdetails.orderitems
                                        ? orderdetails.orderitems
                                            .reduce(
                                                (sum, item) =>
                                                    sum + item.price * item.quantity,
                                                0
                                            )
                                            .toFixed(2)
                                        : "0.00"}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsPage
