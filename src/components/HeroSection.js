import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import fuck from '../video/tanginanyo.mp4';
import crazyy from '../video/crazy.mp4';
import {useTypewriter, Cursor} from 'react-simple-typewriter';


function HeroSection() {
  
  const [textti] = useTypewriter({
  words: ['Web Developer', 'Developer', 'Designer', 'Oppa'],
  loop:{},
  typeSpeed: 120,
  deleteSpeed: 80,
  });

  return (
    <div className='hero-container'>
    <video src={fuck} autoPlay loop muted />
      <h1 className= 'iba-nato '>
        Ampol
        <span>
          {textti}
        </span>
        <span style={{color: 'red'}}>
        <Cursor cursorStyle= '<'/>
        </span>
        </h1>
      <p>?????????</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Call Me
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Hello Hi <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;