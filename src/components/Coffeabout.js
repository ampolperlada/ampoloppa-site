import React from 'react'
import anm from '../image/animes.png';
import './aboutcoffee.css';
import Aboutbox from './Aboutbox';

const Coffeabout = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>.about</h2>
      
      <div className='about__container grid'>
        
        <img src={anm} alt='' className='about__pic' />

        <div className='about__data grid'>
        <div className='about__info'>
        <p className='about__description'>As a student web developer,
    you'll leverage your coding skills to create and maintain websites,
    applying your knowledge of HTML, CSS, and JavaScript.</p>


    <a href="" class="btn effect04" data-sm-link-text="SV" target="_blank"><span>Download</span></a>

        </div>

        <div className='about__skills grid'>
          
          <div className='skills_data'>
            <div className='skills__titles'>
              <h3 className='skills_name'>Development</h3>
              <span className='skills_number'>90%</span>
            </div>

            <div className='skills__bar'>
              <span className='skills__percentage dev'></span>
            </div>
          </div>

          <div className='skills_data'>
            <div className='skills__titles'>
              <h3 className='skills_name'>UX/UI Design</h3>
              <span className='skills_number'>70%</span>
            </div>
            
            <div className='skills__bar'>
              <span className='skills__percentage uidesign'></span>
            </div>
          </div>
          

          <div className='skills_data'>
            <div className='skills__titles'>
              <h3 className='skills_name'>Coffee</h3>
              <span className='skills_number'>100%</span>
            </div>
            
            <div className='skills__bar'>
              <span className='skills__percentage coffee'></span>
            </div>
          </div>
          
          
        </div>
        </div>
      </div>

    <Aboutbox / >

    </section>

  );
  
};

export default Coffeabout;
