import React from 'react'
import './Workexp.css'
import { WORK_EXPERIENCE } from '../utils/data'
import Expcard from './Expcard';
import { useRef } from 'react';
import Slider from 'react-slick';



const Workexp = () => {
    const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite:true,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 2,
    arros: false,
    responsible: [
      {
        breakpoint: 769,
        settings:{
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };




  
  return (
    <section className='experience-container'>
      <h5> Certifications </h5> 

      <div className='experience-content'> 
      
      <div className='arrow-right' onClick={slideRight}>
        <span className="material-icons">arrow_forward</span>
      </div>

      <div className='arrow-left' onClick={sliderLeft}>
        <span className="material-icons">arrow_back</span>
      </div>


        <Slider ref={sliderRef} {...settings}>
      {WORK_EXPERIENCE.map((item)=> (
        <Expcard key={item.title} details={item} />
      ))}
  </Slider>
      </div>
    </section>
  );
};

export default Workexp