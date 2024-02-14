import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaPinterestP } from "react-icons/fa6";
import { GrPrevious, GrNext } from "react-icons/gr";


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [logo1, logo2, logo3];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <section className='w-full max-w-[1000px] mx-auto flex flex-col md:flex-row justify-around items-center space-x-6 p-8 mt-10 bg-yellow-600'>
      <div className="w-[280px] h-[350px] md:w-[460px] md:h-[500px] object-cover relative">
        <img src={images[currentSlide]} alt='img' className="w-full h-full bg-no-repeat bg-center bg-cover" />
        <GrPrevious size={10} className="absolute top-1/2 -left-12 bg-transparent z-10" onClick={prevSlide}/>
        <GrNext size={10} className="absolute top-1/2 -right-10 bg-transparent z-10" onClick={nextSlide}/>
      </div>
      <div className='flex items-center flex-col text-center text-6xl space-y-8 font-bold w-full md:w-2/5'>
        <p className='w-[260px] text-2xl md:w-[460px] md:text-6xl text-black-300 font-bold capitalize mb-4'>
          Are you ready for a new & better you?
        </p>
        <Link to="/services">
          <button className='w-[140px] h-10 text-[12px] text-white capitalize bg-black rounded-md hover:border-2 hover:border-black hover:bg-transparent'>
            Book an appointment
          </button>
        </Link>
        <div className='flex items-center space-x-4 mt-5 '>
          <FaFacebookF size={15} />
          <FaXTwitter size={15} />
          <FaInstagram size={15}/>
          <FaPinterestP size={15}/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
