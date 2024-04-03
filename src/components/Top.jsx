import React from 'react'
import { IoMdRocket } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const Top = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center justify-center gap-2 md:gap-5'>
        <span className=''><  IoMdRocket size={32}  /> </span> <h1 className='text-xl'>Hosterr</h1>
        <button className='bg-gradient-to-r from-orange-300 to-red-400 rounded-full text-xs px-2.5 py-1.5 text-white '>Hoster is hiring</button>
        </div>
        <div className='hidden lg:text-xl lg:text-gray-500 lg:flex lg:gap-5'>
            <a href="http://">Plans</a>
            <a href="http://">Find Domain</a>
            <a href="http://">Why Hosterr</a>
        </div>
        <div className='hidden lg:flex lg:gap-6'>
            <button className='lg:text-xl lg:text-gray-500'>Sign In</button>
            <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white lg:py-4 lg:text-xl '>Join Waitlist</button>
        </div>
        <div className='lg:hidden'>
        <FaBars size={20} />
        </div>
    </div>
  )
}

export default Top