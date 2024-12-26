import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className='bg-customRed flex justify-center'>
            <div className='flex justify-center items-center text-black w-full md:w-1/2 h-screen p-10'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout