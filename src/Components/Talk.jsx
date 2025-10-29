import React from 'react'

export default function Talk() {
  return (
    <div className='flex flex-col max-sm:mt-10 lg:mt-25 '>
        <h2 className='font-Lonely-Coffee max-sm:ml-20 text-4xl lg:ml-20'>Let's Talk</h2>
        <div className='flex flex-row max-sm:flex-col justify-between lg:mx-10 lg:mt-10'>
            <p className='lg:w-100 max-sm:text-center max-sm:mt-4 lg:mt-2 lg:ml-11'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <button className='bg-[#C37841] hover:bg-[#2D1801] text-white p-2 rounded-4xl max-sm:mt-2 max-sm:w-30 max-sm:mx-27 lg:w-40 lg:mt-10'>Contact Us</button>      
        </div>
        
    </div>
  )
}
