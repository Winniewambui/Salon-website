import React from 'react'
import './FooterStyle.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

const Footer = () => {
  return (
    <section id='#footer'>
    <div className='footer'>
<div className='logo-date'>
    <h1>Shear&style</h1>
    <p> &copy;2025 by Shear & Style.All rights reserved.</p>
</div>

<div className='address'>
    <p>500 Terry Francine Street <br />
San Francisco, CA 94158 </p>
<p className='tel-number'>123-456-7890</p>
<p className='info-address'>info@mysite.com</p>
</div>

<div className='f-nav-details'>
    <p> home </p>
    <p>about </p>
    <p>services </p>
    <p>contact </p>
</div>

<div className='footer-icons'>
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