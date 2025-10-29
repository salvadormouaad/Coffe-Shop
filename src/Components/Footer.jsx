import React from 'react'
import Logo from '../assets/preview-removebg-preview 2.png'
import bg from '../assets/bg.png'

export default function Footer() {
  return (
    <>
    <div style={{ backgroundImage: `url(${bg})` }} className='flex flex-row  bg-no-repeat bg-center max-sm:w-98 max-sm:pt-3 max-sm:h-62   absolute w-full lg:h-70 '>
      <div className=' flex flex-row  max-sm:w-90  w-full  backdrop-blur-sm justify-center  lg:pt-10 lg:gap-25    '>
        <img className='lg:w-70 lg:h-40 max-sm:w-40 max-sm:h-20 ' src={Logo} alt="" />
            <div className='flex flex-col gap-1'>
                <h3 className='font-Lonely-Coffee decoration-solid max-sm:text-center text-2xl '>Our Services</h3>
                    <div className='flex flex-col max-sm:text-center lg:mt-5  lg:gap-3'>
                    <a className='font-Tape' href="">Prices</a>
                    <a className='font-Tape'href="">Categories</a>
                    <a className='font-Tape'href="">About US</a>
                    </div>
            </div>
        <div className='flex flex-col max-sm:ml-5 lg:ml-30 '>
            <h3 className='font-Lonely-Coffee max-sm:text-center decoration-solid text-2xl'>Our Adresse</h3>
            <p className='font-Tape lg:w-30 lg:mt-5 lg:pb-20 max-sm:text-center'>Lorem ipsum dolor sit </p>
        </div>
        </div>
    </div>
    <div className='relative lg:mt-55 lg:ml-80 '>
      <hr className='lg:mt-15 lg:w-80 lg:ml-90' />
    </div>
    <div className='flex flex-row max-sm:mt-45 relative lg:mt-9 justify-around'>
      <p className=''>© 2025 Coffee Shop. All rights reserved.</p>
      <p>Terms and Conditions</p>
      <p>Privacy and Policy</p>
    </div>
    </>
  )
}
