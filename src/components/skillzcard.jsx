import React from 'react';
import './skillcard.css';

const SkillCard = ({ title, isActive, onClick, index }) => {
  return (
    <div
      className={`skills-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* NO IMAGE - Just title with styling */}
      <div className='skill-card-content'>
        <h6 className='skill-title'>{title}</h6>
        
        {/* Active Indicator */}
        {isActive && (
          <div className='active-indicator'>
            <span className='indicator-dot'></span>
            <span className='indicator-text'>Selected</span>
          </div>
        )}
      </div>
      
      {/* Hover Arrow */}
      <div className='card-arrow'>→</div>
    </div>
  );
};

export default SkillCard;