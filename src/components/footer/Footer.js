import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className=' bg-gray-600'>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center text-white py-20 px-10 mx-auto max-w-[1200px]'>
<div className='flex flex-col gap-8 md:gap-10 items-start'>
    <h1 className='text-4xl capitalize font-serif font-bold'><Link to="/">Shear&style</Link></h1>
    <p className='text-sm mt-12'> &copy;2025 by Shear & Style.All rights reserved.</p>
</div>


<div className='text-sm flex flex-col gap-8 text-start items-center '>
    <p>500 Terry Francine Street <br />
San Francisco, CA 94158 </p>
<p>123-456-7890</p>
<p>info@mysite.com</p>
</div>

<div className='text-sm capitalize flex flex-row gap-4 pt-10 md:pt-0 md:flex-col md:gap-8'>
<p><Link to="/">Home</Link></p>
<p><Link to="/about">about</Link></p>
<p><Link to ="/services">services</Link></p>
<p><Link to ="/contact">contact</Link></p>
</div>

<div className='flex flex-row gap-4 pt-10 md:pt-0 md:flex-col md:gap-8'>
<FaFacebookF />
  <FaXTwitter />
  <FaInstagram />
  <FaPinterestP />
</div>
    </div>

    </section>
  )
}

export default Footer