import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './HeroSection.css';

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ['Full-Stack Developer', 'React Enthusiast', 'Problem Solver'],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="hero-section">
      {/* Darker Overlay for Better Text Readability */}
      <div className="hero-overlay"></div>

      {/* Content - SIMPLIFIED */}
      <div className="hero-content">
        <h1 className="hero-name">
          Christian <span className="hero-highlight">Paul</span> Perlada
        </h1>

        <div className="hero-typing">
          <span className="typing-text">I'm a {text}</span>
          <Cursor cursorStyle="|" />
        </div>

        {/* Stats - BOTTOM ONLY */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">PRODUCTION SYSTEMS</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">100+</span>
            <span className="stat-label">USERS SERVED</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">6</span>
            <span className="stat-label">MONTHS EXPERIENCE</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#contact" className="hero-btn hero-btn-primary">Call Me</a>
          <a href="#projects" className="hero-btn hero-btn-secondary">View Projects</a>
        </div>

        {/* Tech Stack - Bottom */}
        <div className="hero-tech-stack">
          <span className="tech-label">TECH STACK:</span>
          <div className="tech-badges">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Next.js</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;