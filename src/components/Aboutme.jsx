import React from 'react'
//import pic from '../image/pics.png';
import anm from '../image/animes.png';
import './aboutme.css';
//import Hds from '../components/scrolldown';
//import Srld from '../components/Headersocials';
import './Contactme.jsx'
 const Aboutme = () =>{
  return (
      <section className="about container" id="about">
      <div className="intro">
        <img src={anm} alt="" className="about_img" />
        <h1 className="about__name"> Christi<span className='chris'>an</span> <span className='chris'>Paul</span> Perlada </h1>
        <span className="about__education"> Im a Developer </span>

      
        <a href="#contact-link" className="button-86">Hire me</a>



      </div>
    </section>  
  );
}

export default Aboutme;