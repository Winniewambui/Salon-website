import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Service = () => {
  const [activeTab, setActiveTab] = useState('cuts');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='dark:text-white'>
      <Navbar />
      <div>
        <h1 className='w-[300px] mx-auto mt-24 mb-16 text-5xl capitalize font-serif font-bold'>our services</h1>
        <ul className='flex items-center justify-center gap-8 text-xl capitalize border-b-2 border-black mb-8 w-[300px] h-[40px] mx-auto'>
          <li onClick={() => handleTabClick('cuts')} className={activeTab === 'cuts' ? 'focus:underline active:underline' : ''}>
            cuts
          </li>
          <li onClick={() => handleTabClick('color')} className={activeTab === 'color' ? 'focus:underline active:underline' : ''}>
            color
          </li>
          <li onClick={() => handleTabClick('styling')} className={activeTab === 'styling' ? 'focus:underline active:underline' : ''}>
            styling
          </li>
        </ul>

        {/* Cuts Tab Content */}
        {activeTab === 'cuts' && (
          <section className='mb-8 flex flex-col items-center'>
            {/* 1 */}
            <div className='flex items-center justify-center gap-20 space-x-20 md:space-x-28 md:justify-center border-t border-black w-[500px] md:w-[900px] h-[150px] mx-auto'>
              <div className='flex flex-col gap-4 md:gap-20 items-center justify-between md:flex-row md:space-x-20'>
                <h2 className='capitalize'>wash & dry</h2>
                <div>
                  <p>1 hr</p>
                  <p>$ 100</p>
                </div>
              </div>
              <button className='dark:text-black dark:bg-white px-6 py-3 capitalize text-white bg-gray-900 hover:bg-gray-600'>book now</button>
            </div>

             {/* 2  */}
            <div className='flex items-center justify-center gap-24 space-x-20 md:space-x-40 md:justify-center border-t border-black w-[500px] md:w-[900px] h-[150px] mx-auto'>
              <div className='flex flex-col gap-4 md:gap-24 items-center justify-between md:flex-row md:space-x-20'>
                <h2 className='capitalize'>trim</h2>
                <div>
                  <p>1 hr</p>
                  <p>$ 35</p>
                </div>
              </div>
              <button className='dark:text-black dark:bg-white px-6 py-3 capitalize text-white bg-gray-900 hover:bg-gray-600'>book now</button>
            </div>

            {/* 3 */}
            <div className='flex items-center justify-center gap-20 space-x-20 md:space-x-28 md:justify-center border-y border-black w-[500px] md:w-[900px] h-[150px] mx-auto'>
              <div className='flex flex-col gap-4 md:gap-20 items-center justify-between md:flex-row md:space-x-20'>
                <h2 className='capitalize'>cut & blow Dry</h2>
                <div>
                  <p>1 hr</p>
                  <p>$ 50</p>
                </div>
              </div>
              <button className='dark:text-black dark:bg-white px-6 py-3 capitalize text-white bg-gray-900 hover:bg-gray-600'>book now</button>
            </div>
          </section>
        )}

        {/* Color Tab Content */}
        {activeTab === 'color' && (
          <section className='mb-8 flex flex-col items-center'>
            {/* 1 */}
            <div className='flex items-center justify-center gap-20 space-x-20 md:space-x-28 md:justify-center border-t border-black w-[500px] md:w-[900px] h-[150px] mx-auto'>
              <div className='flex flex-col gap-4 md:gap-20 items-center justify-between md:flex-row md:space-x-20'>
                <h2 className='capitalize'>single process color</h2>
                <div>
                  <p>1 hr</p>
                  <p>$ 150</p>
                </div>
              </div>
              <button className='dark:text-black dark:bg-white px-6 py-3 capitalize text-white bg-gray-900 hover:bg-gray-600'>book now</button>
            </div>

            {/* 2 */}
            <div className='flex items-center justify-center gap-20 space-x-32 md:space-x-32 md:justify-center border-y border-black w-[500px] md:w-[900px] h-[150px] mx-auto'>
            <div className='flex flex-col gap-4 md:gap-24 items-center justify-between md:flex-row md:space-x-24'>
                <h2 className='capitalize'>highlights</h2>
                <div>
                  <p>1 hr</p>
                  <p>$ 100</p>
                </div>
              </div>
              <button className='dark:text-black dark:bg-white px-6 py-3 capitalize text-white bg-gray-900 hover:bg-gray-600'>book now</button>
            </div>
          </section>
          )}

     {/* Styling Tab Content */}
{activeTab === 'styling' && (
  <section className='mb-8 flex flex-col items-center'>
    {/* 1 */}
    <div className='flex items-center justify-center gap-20 space-x-20 md:space-x-28 md:justify-center border-y border-black w-[500px] md:w-[900px] h-[150px] mx-auto'>
      <div className='flex flex-col gap-4 md:gap-20 items-center justify-between md:flex-row md:space-x-20'>
        <h2 className='capitalize'>bridal hair</h2>
        <div>
          <p>1 hr</p>
          <p>$ 200</p>
        </div>
      </div>
              <button className='dark:text-black dark:bg-white px-6 py-3 capitalize text-white bg-gray-900 hover:bg-gray-600 '>book now</button>
    </div>
  </section>
)}

      </div>
      <Footer />
    </div>
  );
};

export default Service;
