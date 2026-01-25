import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import fuck from '../video/tanginanyo.mp4';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function HeroSection() {
  const [textti] = useTypewriter({
    words: ['Junior Developer', 'Full-Stack Developer', 'React Enthusiast', 'Problem Solver'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const phoneNumber = "09605044538";
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='hero-container'>
      <video src={fuck} autoPlay loop muted />
      
      {/* Added greeting */}
      <p className='hero-greeting'>こんにちは (Hello!) 👋</p>
      
      {/* Main title - FIXED "Ampol" */}
      <h1 className='hero-name'>
        Christian <span className='name-highlight'>Paul</span> Perlada
      </h1>
      
      {/* Dynamic typing title */}
      <h2 className='iba-nato'>
        <span className='title-prefix'>I'm a </span>
        <span className='title-dynamic'>
          {textti}
        </span>
        <span style={{ color: 'red' }}>
          <Cursor cursorStyle='<' />
        </span>
      </h2>

      {/* Added tagline */}
      <p className='hero-tagline'>
        Building <span className='highlight'>enterprise applications</span> and{' '}
        <span className='highlight'>internal systems</span> with modern web technologies
      </p>

      {/* Stats section */}
      <div className='hero-stats'>
        <div className='stat-item'>
          <span className='stat-number'>5+</span>
          <span className='stat-label'>Production Systems</span>
        </div>
        <div className='stat-item'>
          <span className='stat-number'>100+</span>
          <span className='stat-label'>Users Served</span>
        </div>
        <div className='stat-item'>
          <span className='stat-number'>6</span>
          <span className='stat-label'>Months Experience</span>
        </div>
      </div>

      <div className='hero-btns'>
        <Button
          className={`btns ${isCopied ? 'copied' : ''}`}
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleCopy}
        >
          {isCopied ? '📋 Copied!' : '📱 Call Me'}
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={scrollToProjects}
        >
          View Projects <i className='far fa-play-circle' />
        </Button>
      </div>

      {/* Tech stack badges */}
      <div className='hero-tech-stack'>
        <span className='tech-label'>Tech Stack:</span>
        <div className='tech-badges'>
          {['React', 'Next.js', 'Node.js', 'PostgreSQL'].map((tech, idx) => (
            <span key={idx} className='tech-badge'>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;