import React from 'react'
import './MainStyle.css'

const Main = () => {
  return (
    <div className='mainpage'>
{/* SERVICE SECTION */}

<section className='hero-service'>
<div className='service-images'>
<div className='color service'>
  <img src='https://images.pexels.com/photos/262173/pexels-photo-262173.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' className='service-img'/>
  <div className='details'>
 <h2> Vibrant Color Services:</h2>
<p>Discover a spectrum of colors that bring life to your locks. 
Whether you're looking for a bold change or subtle highlightsand vibrant p
alette that complements your skin tone and enhances your natural beauty.</p>
</div>
  </div>
  <div className='cuts service'>
  <img src='https://images.pexels.com/photos/3356211/pexels-photo-3356211.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' className='service-img'/>
  <div className='details'>
  <h2>Precision Haircuts:</h2>
<p>We believe that a great haircut is the 
foundation of every stunning hairstyle.From trendy pixie cuts 
to classic layers, we craft hairstyles that leave you feeling confident and fabulous.</p>
</div>
  </div>
  <div className='styling service'>
  <div className='details'>
  <img src='https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' className='service-img'/>
  <h2>Creative Hair Styling:</h2>
<p>Unleash your hair's potential with our creative styling services.  
our stylists are skilled in crafting intricate updos, glamorous curls.</p>
</div>
  </div>
</div>
<button className='services-btn'>view our services</button>
</section>


{/* MOST POPULAR SERVICE */}


<section className='popular-sevice'>
<img src='https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' className='popular-serviceImg'/>
<div className='popular-service-details'>
<h2>Wash & Dry</h2>
<p>
  1 hr <br />
  100 US dollars <br />
  $100
</p>
<button className='book-btn'>book now</button>

</div>
</section>

</div>
  )
}

export default Main