import React from 'react';

const Main = () => {
  return (
    <div>
      {/* SERVICE SECTION */}
      <section className='py-6 mt-6 bg-black dark:bg-white md:max-w-[1100px] mx-auto'>
        <div className='flex flex-col items-center md:flex-row md:items-start justify-around md:space-x-4 p-8 mt-4 mx-auto max-w-[800px]'>
          {/* First Service */}
          <div className='flex flex-col h-[350px] '>
            <img src='https://images.pexels.com/photos/262173/pexels-photo-262173.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' className='w-[260px] h-[270px]' />
            <div className='text-start text-white dark:text-black w-[250px]'>
              <h2 className='text-lg font-semibold'> Vibrant Color Services:</h2>
              <p className='text-xs'>Discover a spectrum of colors that bring life to your locks.</p>
            </div>
          </div>

          {/* Second Service */}
          <div className='flex flex-col h-[380px] '>
            <img src='https://images.pexels.com/photos/3356211/pexels-photo-3356211.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' className='w-[260px] h-[260px]' />
            <div className='text-start text-white dark:text-black w-[250px]'>
              <h2 className='text-lg font-semibold'>Precision Haircuts:</h2>
              <p className='text-xs'>We believe that a great haircut is the foundation of every stunning hairstyle.</p>
            </div>
          </div>

          {/* Third Service */}
          <div className='flex flex-col h-[380px] '>
            <img src='https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' className='w-[260px] h-[260px]' />
            <div className='text-start text-white dark:text-black w-[250px]'>
              <h2 className='text-lg font-semibold'>Creative Hair Styling:</h2>
              <p className='text-xs'>Unleash your hair's potential with our creative styling services. </p>
            </div>
          </div>
          </div>

 <div className='flex items-center justify-center mb-6'>
          <button className='text-white dark:text-black border-2 border-white dark:border-black bg-black dark:bg-white hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black px-4 py-1'>
            View Our Services
          </button>
        </div></section>


{/* MOST POPULAR SERVICE */}

<h1 className='dark:text-white text-4xl font-bold capitalize ml-10 my-8 pl-20 max-w-[800px]'>our most < br/> popular Service</h1>
<section className='flex flex-col md:flex-row items-center space-x-4 mt-4 mb-8 border-2 border-black dark:border-white border-l-0 max-w-[1000px] mx-auto'>
<img src='https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' className='w-[500px] h-[550px]'/>
<div className='w-[350px] text-center my-5 dark:text-white'>
<h2>Wash & Dry</h2>
<p>
  1 hr <br />
  100 US dollars <br />
  $100
</p>
<button className='w-[90px] h-8 capitalize my-5 bg-black dark:bg-white border-none rounded-sm text-white dark:text-black'>book now</button>

</div>
</section>
</div>

  )
}

export default Main