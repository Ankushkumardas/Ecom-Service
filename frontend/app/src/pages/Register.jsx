import React from 'react'

const Register = () => {
   const [data, setdata] = useState({ email: "", password: "" })
    const [pass, showpass] = useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
           
                <div className="max-w-[500px] p-10 flex flex-col justify-center border border-slate-300 shadow  rounded-md">
                    <h2 className="text-center font-bold text-3xl mb-8 text-gray-800">Welcome Back</h2>
                    <form onSubmit={handlesubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={e => setdata({ ...data, email: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <div className=' flex justify-between '>
                                <label className="block text-gray-700 mb-2">Password</label>

                                {pass ? (
                                    <EyeOff className="cursor-pointer " size={19} onClick={() => showpass(false)} />
                                ) : (
                                    <Eye className="cursor-pointer " size={19} onClick={() => showpass(true)} />
                                )}
                            </div>
                            <input
                                type={pass ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={e => setdata({ ...data, password: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
                            >
                                Login
                            </button>
                        </div>
                        <div className=' flex items-center justify-center gap-1'>
                            <p>Do Not have an account?</p> <span><Link to={'/register'} className=' text-blue-500'>Register</Link></span>
                        </div>
                    </form>
                </div>
               
        </div>
  )
}

export default Register
