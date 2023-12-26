import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
// import IndividualImage from '../Components/IndividualImage';

function Images({ images }) {
  return (
    <div data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"  className='flex flex-wrap gap-4 justify-evenly'>
      {images.map((image) => (
        <img src={image.imageUrl} key={image.id} className='w-[300px] h-[400px] rounded-xl shadow-xl mb-4'/>
      ))}
    </div>
  )
}

export default Images;