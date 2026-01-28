import React from 'react';
import './Skillinfocard.css';

const SkillInfoCards = ({ heading, skills = [] }) => {
  return (
    <div className='skills-info-card'>
      {/* Header */}
      <div className='info-card-header'>
        <h6 className='info-heading'>
          {heading}
          <span className='heading-badge'>{skills.length} Skills</span>
        </h6>
      </div>

      {/* Skills List */}
      <div className='skills-info-content'>
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div 
              className='skill-info'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='skill-info-top'>
                <p className='skill-name'>{item.skills}</p>
                <p className='percentage'>{item.percentage}</p>
              </div>
              
              <div className='skill-progress-bg'>
                <div 
                  className='skill-progress'
                  style={{ 
                    width: item.percentage,
                    animationDelay: `${index * 0.1 + 0.3}s`
                  }}
                >
                  <div className='progress-shine'></div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Footer Stats */}
      <div className='info-card-footer'>
        <div className='footer-stat'>
          <span className='stat-label'>Average</span>
          <span className='stat-value'>
            {Math.round(skills.reduce((acc, item) => acc + parseInt(item.percentage), 0) / skills.length)}%
          </span>
        </div>
        <div className='footer-divider'></div>
        <div className='footer-stat'>
          <span className='stat-label'>Total Skills</span>
          <span className='stat-value'>{skills.length}</span>
        </div>
      </div>
    </div>
  );  
};

export default SkillInfoCards;