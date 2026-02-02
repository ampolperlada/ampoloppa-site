import React from 'react';
import anm from '../image/animes.png';
import './aboutme.css';

const Aboutme = () => {
  // Real stats - no fake numbers
  const realStats = [
    { number: "5+", label: "Production Systems" },
    { number: "100+", label: "Users Served" },
    { number: "6", label: "Months Experience" },
    { number: "8+", label: "Total Projects" }
  ];

  return (
    <section className="about container" id="about">
      <div className="intro">
        {/* Anime Image */}
        <img src={anm} alt="Christian Paul Perlada" className="about_img" />
        
        {/* Name */}
        <h1 className="about__name">
          Christi<span className='chris'>an</span> <span className='chris'>Paul</span> Perlada
        </h1>
        
        {/* Title */}
        <span className="about__education">Junior Software Engineer</span>
        
        {/* Bio */}
        <p className="about__bio">
          Passionate about building full-stack systems that solve real business problems. 
          Experienced in React, Next.js, Node.js, and PostgreSQL with a proven track record 
          of delivering production systems serving 100+ users.
        </p>

        {/* Real Stats Grid */}
        <div className="about__stats-grid">
          {realStats.map((stat, index) => (
            <div key={index} className="stat-box">
              <h3 className="stat-number">{stat.number}</h3>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="about__buttons">
          <a href="#contact" className="button-86">Hire Me</a>
          <a 
            href="/Resume_Christian_.pdf" 
            className="button-download" 
            download 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;