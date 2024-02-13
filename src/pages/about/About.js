import React from 'react';
import logo3 from '../../assets/logo3.png'; 

const About = () => {
  return (
    <div>

      <div>
        <h1 className='w-[200px] mx-auto mt-20 mb-12 text-5xl dark:text-white capitalize font-serif font-bold'>
          About Us
        </h1>
        <p className='mx-auto w-[400px] md:w-[600px] text-base text-black dark:text-white text-center py-5'>
          Welcome to Shiphy&Style, where beauty meets indulgence. At our salon, we pride ourselves on creating a haven of style and relaxation for our valued clients. Our talented team of professionals is dedicated to delivering top-notch beauty services, from cutting-edge hairstyling to rejuvenating spa treatments. With a passion for creativity and a commitment to excellence, we strive to enhance your unique beauty and leave you feeling confident and revitalized. Step into our elegant space, unwind, and let us bring out the best in you. Discover the beauty experience you deserve at Shiphy&Style.
        </p>
<div className='bg-orange-500 mb-20 w-[500px] md:w-[900px] mx-auto '>
        <img src={logo3} alt='img' className='h-[450px] w-[300px] mx-auto ' /> 
      </div>
      </div>

    </div>
  );
};

export default About;
