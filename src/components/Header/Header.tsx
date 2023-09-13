import React from 'react'

function Header() {
  return (
    <div className='z-10 p-4 relative text-yellow-500'>
        <div className='absolute w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] right-3 top-3 cursor-pointer opacity-50'>
                <img src="https://static2.vieon.vn/voting/static/media/user.5ff4e35663aa679785c5.png" alt="" /> 
        </div>

        <div className='grid grid-rows-1 justify-center pt-3 lg:pt-6 mx-auto max-w-[930px] mb-4 md:mb-10'>
            <div className='flex justify-center cursor-pointer max-w-[78%] md:max-w-[68%] mx-auto z-10'>
                <img src="https://static2.vieon.vn/voting/static/media/logo-rv3.8af5b94cc4e7fcda1154.png" alt="" />
            </div>
        </div>

        <div className='mx-auto max-w-[80%] md:max-w-[55%] lg:-translate-y-8'>
            <div className='flex space-x-4 items-center justify-center w-full -translate-y-4'>
                <img src="https://static2.vieon.vn/voting/static/media/sponsor-logo.add8ed834d3d7a48cb02.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header