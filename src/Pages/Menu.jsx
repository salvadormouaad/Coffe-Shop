import React from 'react'
import bg from '../assets/L5ybLpPKIKMyjr_-XMDqpXwt4KXcq3kCXb2ijusj4zZdB8_56qWyZCzSsf06s0cL-NzEUu4Rm5KYqVuBWy087GqdlxO3u2WfO4Py-hXhkqANKcyF-EeR5-ENSmMfm2vD0Tvq_KP8mgFFj8g8j7au7o0RvZ8rYMJ2sajiGOYhaXg3TOJjtq48K17W7xZR_NJ5UbWsrSj7uTuBvR5HEy9_A2ET 1.png'
import hero from '../assets/hero2.png'
export default function Menu() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center bg-no-repeat lg:h-500 lg:pt-6 '>
            <div className=' flex flex-col  w-250 bg-white backdrop-blur-sm  lg:mx-70 bg-white/30 lg:h-480  rounded-4xl  '>
                   <div className='flex flex-row '>
                        <img src={hero} alt="" className='opacity-90 rounded-4xl' /> 
                        <p className='absolute justify-center lg:mx-70 lg:my-60 text-4xl/15 text-white lg:text-center'>Check out Our new Cafee Menu:</p>
                   </div>
                   <div>
                        <h2 className='text-center lg:mt-20 text-3xl text-[#2D1801]'>You May Like One of Our coffes:</h2>
                   </div>
                   
            </div>
            </div>
  )
}
