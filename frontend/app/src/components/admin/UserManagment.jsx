import { useState } from 'react';

const users = [
    { _id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", role: "admin" },
    { _id: 2, name: "Bob Smith", email: "bob.smith@example.com", role: "customer" },
    { _id: 3, name: "Charlie Lee", email: "charlie.lee@example.com", role: "customer" }
];

const UserManagment = () => {
    const [formdata, setformdata] = useState({ name: "", email: "", role: "customer", password: "" });

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
        setformdata({ name: "", email: "", role: "customer", password: "" });
    };
    const handlerolechange = (id, role) => {
        console.log(id, role);
    };
    const handledelete = (id) => {
        if (window.confirm('Are you sure to delete this user')) {
            console.log(id);
        }
    };

    return (
        <div className="container mx-auto px-2">
            <div className="max-w-6xl mx-auto p-4 sm:p-8 bg-white/90 rounded-2xl shadow-lg min-h-screen">
                <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 text-center">
                    User Management
                </h1>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Form */}
                    <div className="w-full md:w-1/2 bg-gray-50 rounded-xl shadow p-6 border border-gray-100">
                        <form onSubmit={handlesubmit} className="space-y-5">
                            <div>
                                <label className="block text-xs font-medium mb-1 text-gray-600">Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formdata.name}
                                    onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white transition"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1 text-gray-600">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={formdata.email}
                                    onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white transition"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1 text-gray-600">Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={formdata.password}
                                    onChange={(e) => setformdata({ ...formdata, password: e.target.value })}
                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white transition"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1 text-gray-600">Role</label>
                                <select
                                    value={formdata.role}
                                    onChange={(e) => setformdata({ ...formdata, role: e.target.value })}
                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white transition"
                                >
                                    <option value="admin">Admin</option>
                                    <option value="customer">Customer</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-2 bg-blue-500 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-blue-600 transition"
                            >
                                Create
                            </button>
                        </form>
                    </div>
                    {/* Users Table */}
                    <div className="w-full md:w-1/2 bg-gray-50 rounded-xl shadow p-6 border border-gray-100">
                        <h2 className="text-lg font-semibold mb-4 text-gray-700">
                            Existing Users
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm bg-white">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-500">Name</th>
                                        <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-500">Email</th>
                                        <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-500">Role</th>
                                        <th className="px-4 py-2 border-b text-left text-xs font-semibold text-gray-500">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user._id} className="hover:bg-blue-50 transition">
                                            <td className="px-4 py-2 border-b text-gray-700">{user.name}</td>
                                            <td className="px-4 py-2 border-b text-gray-700">{user.email}</td>
                                            <td className="px-4 py-2 border-b capitalize text-gray-700">
                                                <select
                                                    value={user.role}
                                                    onChange={(e) => handlerolechange(user._id, e.target.value)}
                                                    className="border border-gray-200 rounded px-2 py-1 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-200"
                                                >
                                                    <option value="admin">admin</option>
                                                    <option value="customer">customer</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2 border-b text-gray-700">
                                                <button
                                                    onClick={() => handledelete(user._id)}
                                                    className="text-red-500 hover:text-red-700 px-2 py-1 rounded transition"
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
            </div>
        </div>
    );
};

export default UserManagment;
