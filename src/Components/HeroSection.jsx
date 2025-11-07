import React from 'react'
import img from '../assets/caffe.png'
import icon2 from '../assets/coffeeicon2.png'
import icon3 from '../assets/coffeeicon3.png'
import icon from '../assets/coffeeicon.png'
import '../Fonts/Fonts.css'
export default function HeroSection() {
  return (
    <>
    <div className='flex max-sm:flex-col max-sm:mt-10 lg:mt-20 flex-row w-full md:mt-7  lg:justify-around'>
       <div className='lg:ml-20 md:ml-10'>
            <p className=' font-Lonely-Coffee max-sm:mt-20 max-sm:text-center lg:text-center max-sm:mx-3 lg:mt-55 text-5xl text-[#2D1801] md:text-center md:mt-42 md:w-70  lg:h-30'>Coffee <br /> Best For You</p>
            <button className='bg-[#2D1801] max-sm:mt-5 max-sm:ml-31 max-sm:p-2 hover:bg-[#C37841] lg:mt-15 text-white lg:w-60 md:mt-3 md:p-2 md:ml-24 lg:ml-5 lg:p-3 rounded-4xl'>Shop Now</button>
            <div className='flex max-sm:hidden md:hidden flex-row gap-2 lg:ml-5 lg:mt-3'>

              <div className='lg:p-3 bg-white/35 lg:mt-2 lg:rounded-2xl' >
                <img className='mt-3 w-9 h-6 ' src={icon2} alt="" />
              </div>

              <div className='lg:p-3 bg-white/35 lg:mt-2 lg:rounded-2xl'>
                <img className=' w-8 h-10' src={icon3} alt="" />
              </div>

              <div className='lg:p-3 bg-white/35 lg:mt-2 lg:rounded-2xl'>
                <img className=' w-8 h-10' src={icon} alt="" />
              </div>

            </div>
        </div>
        <img className='lg:w-120 lg:h-100 md:w-60 md:h-55 md:ml-15 md:mt-40 max-sm:ml-14 max-sm:mb-10 max-sm:mt-10  max-sm:w-60 lg:ml-15 ' src={img} alt="" />     
    </div>
    
        </>
  )
}
