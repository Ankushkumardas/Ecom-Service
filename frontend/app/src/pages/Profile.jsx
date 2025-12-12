import React from 'react'
import Orders from './Orders'

const Profile = () => {
    return (
        <div className=' min-h-screen flex flex-col'>
            <div className=' container mx-auto p-4 md:p-6 '>
                <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-2'>
                    <div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-md rounded-xl p-6 flex flex-col items-center mt-2">
                        <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                            <span className="text-3xl text-gray-400">👤</span>
                        </div>
                        <h2 className="text-xl font-semibold mb-1">Jame Florance</h2>
                        <p className="text-gray-500 mb-4">jahsb2@gmail.com</p>
                        <button className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md transition font-medium">
                            Logout
                        </button>
                    </div>
                    <div className=' w-full md:w-2/3 lg:w-3/4 '>
                        <Orders />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
