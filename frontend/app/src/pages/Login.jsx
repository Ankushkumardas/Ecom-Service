import React, { useState } from 'react'

const Login = () => {
    const [data, setdata] = useState({ email: "", password: "" })
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }
    return (
        <div className='container mx-auto'>
            <div className='max-w-7xl mx-auto flex'>
                <div className='w-1/2 h-100'>
                    <h2 className='text-center tracking-tighter font-semibold text-2xl mt-10'>Welcome Back</h2>
                    <div>
                        <form onSubmit={ handlesubmit}>
                            <div>
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={e => setdata({ ...data, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={e => setdata({ ...data, password: e.target.value })}
                                />
                            </div>
                            <div>
                                <button type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/2'>csac</div>
            </div>
        </div>
    )
}

export default Login
