import React from 'react'
import bg from '../assets/bg.png'
import Hero from '../Components/HeroSection2'
import Coffemenu from '../Components/Coffemenu'
export default function Menu() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center bg-no-repeat max-sm:h-auto md:pt-10 md:h-auto max-sm:pt-8 max-sm:pb-8  lg:h-auto md:pb-10 lg:pb-10 lg:pt-17 '>
          <div className=' flex flex-col max-sm:mx-auto max-sm:mt-0 md:w-170 md:mx-auto  lg:mx-auto max-sm:w-50   lg:w-350 bg-white bg-white/40 lg:h-auto max-sm:h-auto  md:h-auto  max-sm:w-85 rounded-4xl  '>
              <Hero/> 
              <Coffemenu/> 
                   
          </div>
     </div>
  )
}
