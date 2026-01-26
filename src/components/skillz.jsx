import React, { useState } from 'react';
import './skillz.css';
import SkillCard from "./skillzcard";
import { SKILLS } from "../utils/data";
import SkillInfoCards from "./SkillInfoCards";

function Skillz() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className='skills-container' id='skills'>
      {/* Section Header with Animation */}
      <div className='skills-header'>
        <h5 className='skills-title'>
          <span className='title-bracket'>&lt;</span>
          Technical Proficiency
          <span className='title-bracket'>/&gt;</span>
        </h5>
        <p className='skills-subtitle'>
          My expertise across different technologies and tools
        </p>
      </div>

      <div className='skills-content'>
        {/* Skill Category Cards */}
        <div className='skills'>
          {SKILLS.map((item, index) => (
            <SkillCard
              key={item.title}
              iconURL={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
              index={index}
            />
          ))}
        </div>

        {/* Skill Details Panel */}
        <div className='skills-info'> 
          <SkillInfoCards
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='skills-bg-decoration'>
        <div className='decoration-circle circle-1'></div>
        <div className='decoration-circle circle-2'></div>
      </div>
    </section>
  );
}

export default Skillz;