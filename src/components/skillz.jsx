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
   <section className='skills-container'>
    <h5> Technical Proficiency</h5>

    <div className='skills-content'>
      <div className='skills'>
      {SKILLS.map((item)=> (
        <SkillCard
        key={item.title}
        iconURL={item.icon}
        title={item.title}
        isActive={selectedSkill.title === item.title}
        onClick={() =>{
          handleSelectSkill(item);
        }}
        />
      ))}
       </div>
        <div className='skills-info'> 
          <SkillInfoCards
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
          />
        </div>
     
    </div>
   </section>
  );
};

export default Skillz;
