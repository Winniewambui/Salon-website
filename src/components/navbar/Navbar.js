import React from 'react'
import './Navbar.css'
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='nav-details'>
<logo>SHEAR$STYLE</logo>
<ul className='nav-menu'>
<li><a href ="/">Home</a></li>
<li><a href ="/">about</a></li>
<li><a href ="/">services</a></li>
<li><a href ="/">contacts</a></li>
</ul>
<div className='signUp-details'>
<AiOutlineUser className="login-icon" />
<IoCartOutline className='cart-icon'/>
</div>
</div>
    </div>
  )
}

export default Navbar;