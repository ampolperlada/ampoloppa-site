import React from 'react';
import anm from '../image/animes.png';
import './aboutme.css';

const Aboutme = () => {
  // Real stats
  const realStats = [
    { number: "5+", label: "Production Systems" },
    { number: "100+", label: "Users Served" },
    { number: "6", label: "Months Experience" },
    { number: "8+", label: "Total Projects" }
  ];

  return (
    <section className="about-section-new" id="about">
      <div className="about-container-new">
        
        {/* Left Side - Image */}
        <div className="about-left">
          <div className="profile-image-wrapper">
            <div className="image-frame"></div>
            <img src={anm} alt="Christian Paul Perlada" className="profile-image" />
            <div className="image-glow-effect"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-right">
          <h1 className="about-name-new">
            Christian <span className='highlight-red'>Paul</span> Perlada
          </h1>
          
          <span className="about-title-new">Junior Software Engineer</span>
          
          <p className="about-bio-new">
            Passionate about building full-stack systems that solve real business problems. 
            Experienced in React, Next.js, Node.js, and PostgreSQL with a proven track record 
            of delivering production systems serving 100+ users.
          </p>

          {/* Stats Grid */}
          <div className="stats-grid-new">
            {realStats.map((stat, index) => (
              <div key={index} className="stat-item-new">
                <h3 className="stat-num">{stat.number}</h3>
                <span className="stat-text">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Only Download CV Button - Centered */}
          <div className="button-wrapper-new">
            <a 
              href="/Resume_Christian_.pdf" 
              className="download-cv-btn-new" 
              download 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="btn-icon">📥</span>
              Download CV
            </a>
          </div>
        </div>

      </div>

      {/* Decorative Background Elements */}
      <div className="bg-decoration">
        <div className="deco-circle deco-1"></div>
        <div className="deco-circle deco-2"></div>
        <div className="deco-line deco-line-1"></div>
        <div className="deco-line deco-line-2"></div>
      </div>
    </section>
  );
};

export default Aboutme;