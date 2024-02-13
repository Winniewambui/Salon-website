import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { IoCartOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-white dark:bg-black flex justify-between items-center h-24 max-w-[1000px] mx-auto px-4 shadow-lg'>
      <h1 className='text-4xl font-serif font-bold text-orange-500 capitalize'><Link to="/">shiphy&style</Link></h1>

      <ul className='dark:text-white text-black hidden capitalize font-Poppins md:flex items-center p-8'>  
      <li className='p-4'><Link to="/">home</Link></li>
      <li className='p-4'><Link to="/about">about</Link></li>
        <li className='p-4'><Link to="/services">services</Link></li>
        <li className='p-4'><Link to="/contact">contact</Link></li>
      </ul>

      <div className='hidden md:flex space-x-8'>
      <Link to="/loginSignUp">
      <AiOutlineUser size={30} className='text-orange-500' />
      </Link>
        <IoCartOutline size={30} className='text-orange-500' />
      </div>

      {/* MOBILE VIEW */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <IoCloseOutline size={30} className='text-orange-600' /> : <IoMenuOutline size={30} className='text-orange-600' />}
      </div>

      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-[#c3c536] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='text-4xl font-bold font-serif mt-4 text-orange-500 capitalize'><Link to="/">shiphy&style</Link></h1>
        <li className='p-4 border-b border-orange-300 capitalize dark:text-white'><Link to="/">home</Link></li>
        <li className='p-4 border-b border-orange-300 capitalize dark:text-white'><Link to="/about">about</Link></li>
        <li className='p-4 border-b border-orange-300 capitalize dark:text-white'><Link to="/services">services</Link></li>
        <li className='p-4 border-b border-orange-300 capitalize dark:text-white'><Link to="/contact">contact</Link></li>

        <div className="flex space-x-8 items-center p-4 border-b border-orange-300">
        <Link to="/LoginForm">
      <AiOutlineUser size={30} className='text-orange-600' />
      </Link>
          <IoCartOutline size={30} className='text-orange-600' />
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
