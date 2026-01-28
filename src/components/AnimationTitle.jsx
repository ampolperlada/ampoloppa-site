import React from 'react';
import './AnimationTitle.css';
import Samurai from '../image/Samurai.png';

const AnimationTitle = () => {
  return (
    <div className='animation-title-container'>
      {/* Left side - Samurai */}
      <div className='samurai-section'>
        <div className='samurai-wrapper'>
          <img 
            src={Samurai} 
            alt="Samurai warrior" 
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
          
          <div className='scanlines'></div>
          <div className='chromatic-overlay'></div>
          <div className='neon-trails'></div>
        </div>
      </div>

      {/* Diagonal Slash Effect */}
      <div className='slash-divider'>
        <div className='slash-line slash-1'></div>
        <div className='slash-line slash-2'></div>
        <div className='slash-line slash-3'></div>
        <div className='slash-particles'>
          <span className='particle'></span>
          <span className='particle'></span>
          <span className='particle'></span>
          <span className='particle'></span>
          <span className='particle'></span>
        </div>
      </div>

      {/* Right side - Title */}
      <div className='title-section'>
        <h1 className='section-main-title'>
          <span className='title-bracket'>&lt;</span>
          SKILLS
          <span className='title-bracket'>/&gt;</span>
        </h1>
        <p className='title-subtitle'>Technical Proficiency</p>
      </div>

      {/* Background Effects */}
      <div className='glitch-overlay'></div>
      <div className='vhs-noise'></div>
      <div className='neon-grid'></div>
      <div className='holographic-shimmer'></div>
      
      {/* Corner Accents */}
      <div className='corner-accent corner-top-left'></div>
      <div className='corner-accent corner-top-right'></div>
      <div className='corner-accent corner-bottom-left'></div>
      <div className='corner-accent corner-bottom-right'></div>
    </div>
  );
};

export default AnimationTitle;