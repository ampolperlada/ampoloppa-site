import React, { useState } from 'react'
import './AnimationTitle.css';
import samurai from '../image/Samurai.png';
import skillimg from '../image/Skillimage.png'

const AnimationTitle = () => {
  return (
    <>
      <div className="skill">
      <div className='moveLeft-skill-image'>
        <img src={skillimg} alt="skill-image" />
      </div>
      <div className='moveLeft-image'>
        <img src={samurai} alt="Samurai"/>
      </div>
      </div>
    </>
  );
}


export default AnimationTitle