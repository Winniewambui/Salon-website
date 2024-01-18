import React from 'react'
import './HeroStyle.css'
import logo3 from '../../assets/logo3.png'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";


const Hero = () => {
  return (
    <>
      <section className='hero-section'>
        <div className='hero-images'>
          <img src={logo3} alt='img' />
        </div>
        <div className='hero-details'>
          <p>are you ready for a new & better you?</p>
          <button className='appointment-btn'>Book an appointment</button>

          <div className='social-icons'>
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>
      </section>

    </>
  )
}

export default Hero

