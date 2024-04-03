import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col gap-10  md:flex-row md:items-end md:justify-between md:mt-28 lg:mt-8'>
    <div className='flex gap-5 text-gray-500 md:text-xl '>
        <a href="#">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
    </div>
    <div className='flex gap-3 md:text-xl'>
        <img src="./assets/help.svg" alt="" />
        <span>
            <p>Have any questions?</p>
            <p className='font-semibold leading-none'>Talk to a specialist</p>
        </span>
    </div>
    </div>
    </>
  )
}

export default Footer