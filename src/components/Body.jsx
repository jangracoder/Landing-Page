import React from 'react'

const Body = () => {
  return (
    <div className='lg:flex lg:flex-row-reverse ' >
      <div className='flex items-center justify-center md:mt-16 lg:flex-1 '> 
        <img src="./assets/blue.svg" alt="1st"  className='-rotate-45 h-64 md:h-96'/>
        <img src="./assets/pink.svg" alt="2nd"  className='absolute -rotate-[30deg] h-64 md:h-96'/>
        <img src="./assets/purple.svg" alt="3rd" className='absolute -rotate-[15deg] h-64 md:h-96' />
        <img src="./assets/model.png" alt="4th"  className='absolute h-64 md:h-96 '/>
        </div>  
        <div className='flex flex-col gap-3 md:mt-5 lg:w-[30%] lg:flex-1'>
          <h1 className='text-5xl md:text-6xl font-semibold leading-tight '>Host your Website in less than 5 minutes</h1>
          <p className='text-gray-500  mt-2 md:text-xl md:leading-normal'>With Hoster , get your website up and running in no less than 5 minutes with the most competitve pricing packages available online</p>
          <form action="" className='flex flex-col gap-3 mt-2 md:flex-row'>
            <input className='rounded-md px-4 py-3 text-lg placeholder:text-gray-500 md:px-8 md:py-4 md:placeholder:text-xl' type="email" placeholder='Enter e-mail address' />
            <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white md:text-xl'>Join Waitlist</button>
          </form>
          <div className='flex gap-2 md:gap-4 mt-3 '>
            <img  src="./assets/Checkmark.svg" alt="check" />
            <p className='text-gray-500 md:text-xl'>No spam, ever. Unsubscribe anytime</p>
          </div>
        </div>
    </div>
  )
}

export default Body