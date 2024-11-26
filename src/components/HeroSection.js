import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import fuck from '../video/tanginanyo.mp4';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function HeroSection() {
  const [textti] = useTypewriter({
    words: ['Web Developer', 'Developer', 'Designer', 'Oppa'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const phoneNumber = "09605044538"; // The number to copy
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setIsCopied(true); // Show "Copied!" indicator
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className='hero-container'>
      <video src={fuck} autoPlay loop muted />
      <h1 className='iba-nato'>
        Ampol
        <span>
          {textti}
        </span>
        <span style={{ color: 'red' }}>
          <Cursor cursorStyle='<' />
        </span>
      </h1>
      <p>こんにちは</p>
      <div className='hero-btns'>
        <Button
          className={`btns`}
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleCopy} // Copy phone number when clicked
        >
          {isCopied ? 'Crtl V' : 'Call Me'} {/* Update text dynamically */}
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
        >
           $ <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
