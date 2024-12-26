import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className='bg-customRed flex justify-center'>
            <div className='flex items-center text-black w-[95%] md:w-[60%] h-screen'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout