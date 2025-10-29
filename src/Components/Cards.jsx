import React from 'react'
import bg from '../assets/espresso.webp'
export default function Cards() {
  return (
        <div style={{ backgroundImage: `url(${bg})` }} className='flex flex-row  lg:mt-15 lg:ml-5  bg-cover bg-center opacity-70 bg-no-repeat h-50 lg:pt-6 w-50 rounded-4xl'>
            <button className='bg-[#C37841] text-white hover:bg-[#2D1801] p-2 h-10 rounded-4xl lg:mt-32 lg:ml-12 w-25'>Shop now</button>       
        </div>
  )
}
