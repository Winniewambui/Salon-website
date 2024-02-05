import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Testimonial = () => {
    return (
        <>
        <Navbar /> 

        <h1 className='w-[200px] mx-auto mt-24 mb-16 text-5xl dark:text-white capitalize font-serif font-bold'>contact</h1>
        <p className='mx-auto w-[400px] md:w-[600px] text-base text-black dark:text-white text-center'>
Elevate your beauty and relaxation experience at Shiphy&Style. Our skilled team is dedicated to providing personalized services that bring out your natural radiance. 
For appointments or questions, contact us at:</p>

            <div className=' bg-white mt-20'>
                <div className='pt-10 flex flex-col items-center md:flex-row md:items-center gap-4 py-10 px-4 max-w-[800px] mx-auto '>
                    {/* First column */}
                    <div className='flex flex-col md:gap-20 bg-black h-[250px] md:h-[500px] w-[250px]'>
                        <div className=' px-10 py-10 md:py-20'> 
                            <p className='text-lg text-white font-bold'>
                                Phone:
                            </p>
                            <p className='text-sm text-white'>+254-712-345-578 </p>
                            </div>
                            <p className='text-sm text-white text-center md:py-10 pt-10'>Email: < br /> winniebwambui7@gmail.com </p>
                    </div>

                    {/* Second column */}
                    <div className='pt-10 px-10 py-20 md:py-20 capitalize text-base bg-pink-300 text-white h-[250px] md:h-[500px] w-[250px]'>
                        <h1 className='capitaize text-lg font-bold'>opening hours:</h1>
                        <p>Monday 10am-7pm</p>
                        <p>Tuesday 10am-7pm</p>
                        <p>wednesday 10am-7pm</p>
                        <p>thursday 11am-8pm</p>
                        <p>friday 11am-8pm</p>
                        <p>saturday 9am-6pm</p>
                    </div>

                    {/* Third column */}
                    <div className='bg-black h-[280px] md:h-[500px] w-[250px]'>
                        <div className='md:text-center text-white md:text-sm px-10 md:py-20'>
                            <h1 className='font-bold text-lg'>Address:</h1>
                            <p className='text-base capitalize'>500 terry francine street </p>
                            <p className='text-base capitalize'>san franscisco, CA 94158</p>
                        </div>
                    </div>
                </div>
            </div>


            < Footer />
        </>

    );
};

export default Testimonial;