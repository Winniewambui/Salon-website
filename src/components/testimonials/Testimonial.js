import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import data from '../../utilis/profilepics.json';

const Testimonial = () => {
  return (
    <>
      <div className=' bg-pink-200 mt-20'>
        <div className='flex flex-col items-center md:flex-row md:items-center gap-4 py-10 px-4 max-w-[800px] mx-auto '>
          {/* First column */}
          <div className='bg-white h-[250px] md:h-[500px] w-[250px]'>
            <p className='text-center text-2xl md:text-4xl text-black font-bold px-20 py-20'>The Best in the World</p>
          </div>

          {/* Second column */}
          <div className='px-20 py-20 text-center bg-black text-white h-[250px] md:h-[500px] w-[250px]'>
            <ImQuotesLeft size={80} />
          </div>

          {/* Third column */}
          <div className='bg-white h-[280px] md:h-[500px] w-[250px]'>
            <p className='md:text-center text-xs text-pretty text-black md:text-sm px-20 py-5 md:py-20'>
              “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.” Jennifer.
            </p>
          </div>
        </div>
      </div>

      <div className='profileSection'>
        <div className='py-20 dark:text-white'>
          <p className='text-lg font-bold capitalize'>#shear&style</p>
          <h1 className='text-4xl font-bold capitalize'>Essential Looks & Products</h1>
        </div>

        <div className='flex flex-col space-y-2 items-center md:grid grid-cols-4 md:gap-4 mt-4 border-b-2 border-white-200 max-w-[1240px] mx-auto w-4/4'>
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt='img' className='h-[250px] w-[300px] md:h-[300px] md:w-[350px]' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;