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
    <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center bg-no-repeat lg:h-500 max-sm:h-410 lg:pt-6 max-sm:pt-10 '>
        <div className=' flex flex-col max-sm:mx-6 max-sm:mt-0 lg:mx-15 lg:my-15  lg:w-350 bg-white bg-white/40 lg:h-470 max-sm:h-395 max-sm:w-85 rounded-4xl  '>
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
