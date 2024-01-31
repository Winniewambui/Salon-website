import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import data from '../../utilis/profilepics.json';

const Testimonial = () => {
  return (
    <>
      <div className=' bg-pink-200 mt-20'>
        <div className='flex flex-col md:flex-row gap-4 py-10 px-4 mx-auto max-w-[1000px]'>
          {/* First column */}
          <div className='bg-white h-[500px] w-[250px]'>
            <p className='text-center text-4xl text-black font-bold px-20 py-20'>The Best in the World</p>
          </div>

          {/* Second column */}
          <div className='px-20 py-20 text-center bg-black text-white h-[500px] w-[250px]'>
            <ImQuotesLeft size={80} />
          </div>

          {/* Third column */}
          <div className='bg-white h-[500px] w-[250px]'>
            <p className='text-center text-pretty text-black text-sm px-20 py-20'>
              “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.” Jennifer.
            </p>
          </div>
        </div>
      </div>

      <div className='profileSection'>
        <div className='details'>
          <p>#shear&style</p>
          <h1>Essential Looks & Products</h1>
        </div>

        <div className='profileImages'>
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt='img' className='testimonialImage' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;