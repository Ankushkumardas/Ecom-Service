import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='container mx-auto'>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-4">
                    <h1 className="text-md mb-2 text-center ">Welcome Back</h1>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
