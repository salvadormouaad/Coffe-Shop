import React from 'react';
import Slider from 'react-slick';
import bg1 from '../assets/espresso.webp'; // First image
import bg2 from '../assets/cappuchino.jpg'; // Second image
import bg3 from '../assets/latte.webp'; // Third image
import bg4 from '../assets/americano.webp'; // Fourth image
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

// Array of background images
const backgrounds = [bg1, bg2, bg3 , bg4];

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Categories() {
  return (
    <div className="container max-sm:mx-0  lg:mx-auto lg:px-18 lg:py-8">
      <h1 className="font-Lonely-Coffee text-center text-4xl mb-8">Top Categories</h1>
      <Slider {...sliderSettings}>
        {backgrounds.map((bg, index) => (
          <div key={index} className="px-2">
            <div
              style={{ backgroundImage: `url(${bg})` }}
              className="relative max-sm:w-38 lg:mt-10 items-center justify-center bg-cover  bg-center opacity-90 h-64 rounded-3xl transition-transform duration-300 hover:scale-105"
            >
              <button className="bg-[#C37841] max-sm:mx-7 max-sm:p-1 max-sm:my-50 lg:ml-60 lg:mt-50 text-white  hover:bg-[#2D1801] lg:px-10  lg:py-2 rounded-full text-lg font-semibold transition-colors duration-300">
                Shop now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}