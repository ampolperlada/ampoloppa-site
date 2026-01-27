import React from 'react';
import './AnimationTitle.css';
import Samurai from '../image/Samurai.png';

const AnimationTitle = () => {
  return (
    <div className='animation-title-container'>
      {/* Glitch overlay effect */}
      <div className='glitch-overlay'></div>
      
      {/* VHS noise effect */}
      <div className='vhs-noise'></div>
      
      {/* Neon grid background */}
      <div className='neon-grid'></div>
      
      {/* Main image with multiple layers for depth */}
      <div className='samurai-wrapper'>
        <img 
          src={Samurai} 
          alt="Samurai warrior illustration" 
          className='samurai-image samurai-base'
        />
        <img 
          src={Samurai} 
          alt="" 
          className='samurai-image samurai-glitch-1'
          aria-hidden="true"
        />
        <img 
          src={Samurai} 
          alt="" 
          className='samurai-image samurai-glitch-2'
          aria-hidden="true"
        />
        
        {/* Scan lines effect */}
        <div className='scanlines'></div>
        
        {/* Color aberration overlay */}
        <div className='chromatic-overlay'></div>
        
        {/* Neon glow trails */}
        <div className='neon-trails'></div>
      </div>
      
      {/* Title overlay */}
      <div className='title-overlay'>
        <h1 className='section-main-title'>
          <span className='title-bracket'>&lt;</span>
          SKILLS
          <span className='title-bracket'>/&gt;</span>
        </h1>
      </div>
      
      {/* Animated corner accents */}
      <div className='corner-accent corner-top-left'></div>
      <div className='corner-accent corner-top-right'></div>
      <div className='corner-accent corner-bottom-left'></div>
      <div className='corner-accent corner-bottom-right'></div>
      
      {/* Holographic shimmer overlay */}
      <div className='holographic-shimmer'></div>
    </div>
  );
};

export default AnimationTitle;