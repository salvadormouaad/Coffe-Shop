import React, { useState } from 'react';
import Logo from '../assets/preview-removebg-preview 2.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex flex-row max-sm:justify-between lg:w-310 max-sm:w-88 max-sm:mx-0 lg:mx-70 absolute lg:mt-25 pt-3'>
      {/* Logo */}
      <img src={Logo} className='lg:w-50 max-sm:w-40 max-sm:mt-5' />

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden mt-5  text-gray-700 focus:outline-none ml-auto mr-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop Links (unchanged) */}
      <div className='flex max-sm:hidden flex items-center justify-center lg:w-full lg:pt-5 max-sm:gap-4 max-sm:pt-2 lg:gap-7'>
        <NavLink to='/' className='text-black lg:text-lg hover:text-[#C37841] hover:underline decoration-solid'>Home</NavLink>
        <NavLink to='/Menu' className='text-black lg:text-lg hover:underline hover:text-[#C37841] decoration-solid'>Menu</NavLink>
        <NavLink to='/About' className='text-black lg:text-lg hover:underline hover:text-[#C37841] decoration-solid'>About</NavLink>
        <NavLink to='/Contact' className='text-black lg:text-lg hover:underline hover:text-[#C37841] decoration-solid'>Contact</NavLink>
        <NavLink to='/Menu'>
          <button className='bg-[#C37841] hover:bg-[#2D1801] hover:underline decoration-solid text-white p-2 rounded-4xl'>
            Shop now
          </button>
        </NavLink>
      </div>

      {/* Mobile Dropdown Menu - appears only when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden  absolute top-full left-9 right-0 bg-[#2D1801] rounded-2xl shadow-lg p-4 flex flex-col items-center gap-5 z-50">
          <NavLink
            to='/'
            className='text-black max-sm:text-white lg:text-lg hover:text-[#C37841] hover:underline decoration-solid'
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to='/Menu'
            className='text-black max-sm:text-white lg:text-lg hover:underline hover:text-[#C37841] decoration-solid'
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </NavLink>
          <NavLink
            to='/About'
            className='text-black max-sm:text-white lg:text-lg hover:underline hover:text-[#C37841] decoration-solid'
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to='/Contact'
            className='text-black max-sm:text-white lg:text-lg hover:underline hover:text-[#C37841] decoration-solid'
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink to='/Menu' onClick={() => setIsMenuOpen(false)}>
            <button className='bg-[#C37841] hover:bg-[#2D1801] hover:underline decoration-solid text-white p-2 rounded-4xl w-full'>
              Shop now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}