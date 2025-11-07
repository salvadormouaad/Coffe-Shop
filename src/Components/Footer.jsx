import React from 'react'
import Logo from '../assets/preview-removebg-preview 2.png'
import bg from '../assets/bg.png'

export default function Footer() {
  return (
    <>
    <div style={{ backgroundImage: `url(${bg})` }} className='flex flex-row  bg-no-repeat bg-center max-sm:w-97.2  max-sm:h-110 md:h-45   absolute w-full lg:h-70 '>
      <div className=' flex flex-row max-sm:ml-7 lg:justify-center md:ml-15  max-sm:flex-col  max-sm:w-60  w-full  backdrop-blur-sm md:pt-5  lg:pt-10 lg:gap-25 md:gap-20    '>
        <img className='lg:w-auto md:h-30  lg:h-35 max-sm:w-30 max-sm:h-30 max-sm:ml-1 max-sm:mt-2 ' src={Logo} alt="" />
            <div className='flex flex-col max-sm:mt-4 gap-1'>
                <h3 className='font-Lonely-Coffee decoration-solid max-sm:text-left text-2xl '>Our Services</h3>
                    <div className='flex flex-col max-sm:text-left lg:mt-5  lg:gap-3'>
                    <a className='font-Tape' href="">Prices</a>
                    <a className='font-Tape'href="">Categories</a>
                    <a className='font-Tape'href="">About US</a>
                    </div>
            </div>
        <div className='flex flex-col  max-sm:mt-4 lg:ml-30 '>
            <h3 className='font-Lonely-Coffee max-sm:text-left decoration-solid text-2xl'>Our Adresse</h3>
            <p className='font-Tape lg:w-30 lg:mt-5 lg:pb-20 max-sm:text-left'>Lorem ipsum dolor sit </p>
        </div>
        </div>
    </div>
    <div className='relative lg:mt-55 lg:ml-80 '>
      <hr className='lg:mt-15 lg:w-80 lg:ml-90' />
    </div>
    <div className='flex flex-row max-sm:gap-2 md:mt-37 max-sm:ml-7 max-sm:flex-col max-sm:mt-85 relative lg:mt-9 justify-around'>
      
      <a>Terms and Conditions</a>
      <a>Privacy and Policy</a>
      <p >© 2025 Coffee Shop. All rights reserved.</p>    
          </div>
    </>
  )
}
