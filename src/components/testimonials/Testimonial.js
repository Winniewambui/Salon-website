import React from 'react'
import './TestimonialStyle.css'
import { ImQuotesLeft } from "react-icons/im";
import data from '../../utilis/profilepics.json'

const Testimonial = () => {
  return (
<>
  <div className='testimonials-section'>

  <div className='testimonials'>
<div className='white testimony'>
<p className='testimony-p'>The Best in the World</p></div>
<div className='black testimony'>
<ImQuotesLeft style={{padding: '100px', fontSize: '4rem'}}/>
</div>
<div className='white-slider testimony'>
<p className='testimony-p'>
“I'm a testimonial. Click to edit me and add text 
that says something nice about you and your services. 
Let your customers review you and tell their friends how great you are.”
Jennifer.</p>
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
  )
}

export default Testimonial;