import React from 'react'
import logo3 from '../../assets/logo3.png'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaPinterestP } from "react-icons/fa6";


const Hero = () => {
  return (
    <>
      <section className='w-full max-w-[1000px] mx-auto flex flex-col md:flex-row justify-around items-center space-x-6 p-8 bg-yellow-600'>
        <div className='flex '>
          <img src={logo3} alt='img' className='w-[460px] h-[500px] object-cover'/>
        </div>
        <div className='flex items-center flex-col text-center text-6xl space-y-8 font-bold w-full md:w-2/5'>
          <p className='w-[260px] text-2xl font-serif md:w-[460px] md:text-6xl text-black-300 font-bold capitalize mb-4'>
          Are you ready for a new & better you?
          </p>
          <button className='w-[145px] h-10 text-[12px] text-white capitalize bg-black rounded-md hover:border-2 hover:border-black hover:bg-transparent'>
          Book an appointment
          </button>

          <div className='flex items-center space-x-4 mt-5 '>
            <FaFacebookF size={15} />
            <FaXTwitter size={15} />
            <FaInstagram size={15}/>
            <FaPinterestP size={15}/>
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero

