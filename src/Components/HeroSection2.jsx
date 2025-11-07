import React from 'react'
import hero from '../assets/hero2.png'
export default function HeroSection2() {
  return (
    <div className='flex relative lg:h-130 rounded-4xl'>
                    <div style={{ backgroundImage: `url(${hero})` }} className='absolute flex inset-0 bg-cover   bg-center bg-no-repeat md:h-65 max-sm:h-45 lg:h-auto opacity-70 rounded-4xl'>
                    </div>
                    <div className='flex z-10 lg:w-full max-sm:w-full md:w-full max-sm:justify-center max-sm:items-center md:justify-center md:items-center lg:justify-center  lg:items-center  '>
                            <p className='flex font-Lonely-Coffee md:text-4xl lg:text-4xl lg:text-center max-sm:text-center md:text-center lg:items-cente md:mt-43 max-sm:mt-30 lg:mt-30  '>
                                Check Our New <br />  Coffe Menu:
                            </p>
                    </div>
                    
               </div>
  )
}
