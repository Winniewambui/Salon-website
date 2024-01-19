import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineUser } from 'react-icons/ai';
import { IoCartOutline } from 'react-icons/io5';


const Navbar = () => {
  return (
    <div className='navbar'>

    <div className='nav-details'>
  <h1><Link to="/">shear&style</Link></h1>

<ul className='nav-menu'>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">about</Link></li>
<li><Link to ="/services">services</Link></li>
<li><Link to="/contacts">contacts</Link></li>
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