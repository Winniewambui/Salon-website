import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import logo3 from '../../assets/logo3.png'; 

const About = () => {
  return (
    <div>
      <Navbar />

      <div>
        <h1 className='w-[200px] mx-auto mt-24 mb-16 text-5xl dark:text-white capitalize font-serif font-bold'>
          About Us
        </h1>
        <p className='mx-auto w-[400px] md:w-[600px] text-base text-black dark:text-white text-center py-10'>
          Welcome to Shiphy&Style, where beauty meets indulgence. At our salon, we pride ourselves on creating a haven of style and relaxation for our valued clients. Our talented team of professionals is dedicated to delivering top-notch beauty services, from cutting-edge hairstyling to rejuvenating spa treatments. With a passion for creativity and a commitment to excellence, we strive to enhance your unique beauty and leave you feeling confident and revitalized. Step into our elegant space, unwind, and let us bring out the best in you. Discover the beauty experience you deserve at Shiphy&Style.
        </p>

        <img src={logo3} alt='img' className='h-[500px] w-[600px] object-cover' /> 
      </div>

      <Footer />
    </div>
  );
};

export default About;
