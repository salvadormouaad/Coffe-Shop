import React from 'react'
import shop from '../assets/CaffeShop.jpg'
export default function Choose() {
  return (
    <div className='flex flex-col max-sm:mt-15 lg:mt-15 md:mt-20  lg:w-full  '>
            <div className='lg:mx-10'>
        <h1 className='font-Lonely-Coffee text-center w-full text-4xl'>Why Choose Us</h1>
            <div className='flex flex-row max-sm:flex-col md:mt-10 max-sm:mt-5 justify-between lg:mx-10 lg:mt-20'>
                <p className='lg:w-140 md:ml-5 max-sm:mx-5 max-sm:text-center lg:mt-15'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, fgiat voluptatem quaerat odit dolorum pariatur quas minima. Nisi consequuntur repellat et cupiditate quia, sunt aspernatur. Eos modi adipisci optio delectus.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure cumque alias iste laudantium hic illo quas itaque maiores atque. Doloremque ipsum quisquam facere porro inventore natus repellendus eius vel laborum.
                </p>
                <img className='lg:w-100 max-sm:w-60 md:w-70 md:mx-10 max-sm:mx-13 max-sm:mt-5 rounded-4xl' src={shop} alt="" />
            </div>
            </div>
    </div>
  )
}
