import React from 'react'
import bg from '../assets/bg.png'
import img from '../assets/caffe.png'
import Hero from '../Components/HeroSection'
import Categories from '../Components/Categories'
import Choose from '../Components/Choose'
import Talk from '../Components/Talk'
import Footer from '../Components/Footer'
import '../index.css'

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center bg-no-repeat lg:h-500 max-sm:h-430 lg:pt-6 max-sm:pt-10 md:pt-15 md:h-370 '>
        <div className=' flex flex-col max-sm:mx-auto max-sm:mt-0 md:w-170 md:mx-auto  lg:mx-auto lg:my-15  lg:w-350 bg-white bg-white/40 lg:h-auto max-sm:h-417 md:h-350 max-sm:w-85 rounded-4xl  '>
               <Hero/>
                <Categories/>
                <Choose/>
                <Talk/>
                
              
        </div>
        <div>
           
        </div>
    </div>
  )
}
